import assert from 'assert';
import fs from 'fs';
import CakeResumeAdapter from './adapters/cakeresume';
import CakeResumeHighLevelAdapter from './adapters/cakeresumeHighLevel';
import { IAdapter, IAdapterConstructor, IAdapterOutput } from './types/adapter';
import yaml from 'js-yaml';
import crc from 'crc';
import sluggify from 'limax';

// import db from './db';
import path from 'path';

const DEBUG = !!process.env.DEBUG;

// This is separated out as a type because it is not the adapters responsibility
// to handle badges. Anything that comes from our CMS and _not_ the site adapter
// does not concern the adapter.
interface IDBRowJob extends IAdapterOutput {
    // The CMS-defined label for a group of jobs
    // badges: string[];
    badges: string[];
}

const MAPPINGS: { [k: string]: IAdapterConstructor } = {    
    'www.cakeresume.com' : CakeResumeAdapter,       
};

const getAdapter = (url: string): IAdapter => {
    const { host } = new URL(url);
    const Adapter = MAPPINGS[host];       
    console.log(MAPPINGS[host]);
    assert(Adapter, `No adapter found for "${host}"`);

    return new Adapter(url);
};

// Example URL: 'https://www.cakeresume.com/jobs?q=project%20manager&refinementList%5Blang_name%5D%5B0%5D=English&refinementList%5Bsalary_type%5D=per_year&range%5Bsalary_range%5D%5Bmin%5D=1000000&page=2';
const getJobs = async (url: string) => {
    assert(url, 'Must provide a URL');

    const adapter = getAdapter(url);

    console.log(url);    
    // This could throw, but We'll catch at a higher level
    return await adapter.getJobs();
};

interface IYamlData {
    label: string;
    url: string;
}

const getStats = async (items: IYamlData[]) => {
    return Promise.all(
        items.map(async (x) => {
            const adapter = getAdapter(x.url);
            const jobCount = String(await adapter.getJobCount()).padStart(3, '0');

            return `${jobCount}\t${x.label}\t${adapter.url}`;
        })
    )
        .then((xs) => xs.sort().reverse().join('\n'))
        .then(console.log);
};

const processJobLists = async (items: IYamlData[]) => {
    const result: IDBRowJob[][] = await Promise.all(
        items.map(({ label, url }) => {
            return getJobs(url)
                .then((xs) => {                    
                    return xs.map((x) => ({ ...x, badges: [label] }));
                })
                .catch((err) => {
                    console.error(
                        '[SKIP] The following URL errored. Ignoring and continuing: ',
                        url
                    );
                    if (DEBUG) {
                        console.log('DEBUG flag set. Error follows:');
                        console.error(err);
                    }
                    return []; // Ignore the error by returning the appropriate type
                });
        })
    );

    const jobs = result.flat().map((x) => {
        return {
            ...x,
            badges: x.badges.map(stringifyJobTag),
        };
    });
    const outdir = path.join('content', 'jobs');

    // Clean output dir
    const oldFiles = fs.readdirSync(outdir);
    console.log();
    console.log(`    Cleaning ${oldFiles.length} outdated job files...`);
    oldFiles
        .filter((x) => !x.startsWith('_index'))
        .forEach((filename) => {
            fs.unlinkSync(path.resolve(outdir, filename));
        });

    // Write a markdown file for each job. These will get picked up by the hugo build process.
    for (const j of jobs) {
        const str = toMarkdownString(j);
        for (const lang of ['en', 'zh']) {
            const uniqueFileId = crc.crc32(j.data_source_internal_id).toString(16);
            const filename = `${sluggify(j.title, { tone: false })}-${uniqueFileId}.${lang}.md`;
            const outfile = path.join(outdir, filename);
            fs.writeFileSync(outfile, str, { encoding: 'utf-8' });
        }
    }

    // Ensure that the output dir exists before writing
    // fs.mkdirSync(path.dirname(outfile), { recursive: true })
    // fs.writeFileSync(outfile, JSON.stringify(jobs, null, 2), { encoding: 'utf-8' });

    console.log(`    ${jobs.length} files written to -> ${outdir}`);
    console.log();
};

// NOTE: When dealing with job tags we run into the odd edge cases like "c#" and
// "c". "c" is a fine tag for a job, but "c#" causes issues since if it ends up
// as a URL (which it will) it would actually be matched against the "c" path
// since "#" in URLs indicates that all content afterword should not be sent to
// the server. We could of course just strip these characters, but the odd edge
// case of "c" and "c#" would end up the same. I.e. jobs tagged with either tag
// would end up in the same bucket, despite being different programming
// languages.
const stringifyJobTag = (x: string) => {
    return x.replace(/#/g, 'sharp'); // c# -> csharp
};

const toMarkdownString = (x: IDBRowJob) => {
    // @note fetched_at is only extracted so it doesn't make it into the output
    // YAML. Since it changes every fetch it causes a data change on every
    // single job file even if the job has not changed.
    const { description, fetched_at, ...frontmatter } = x;
    const fm = yaml.dump(frontmatter); // @note This is where jobs get serialized to markdown
    return `---\n${fm}\n---\n\n${description}`;
};

const commands: { [k: string]: (xs: IYamlData[], ...args: any[]) => Promise<void> } = {
    processJobLists,
    getStats,
};

if (require.main === module) {
    const [commandName, ...args] = process.argv.slice(2);
    const cmd = commands[commandName];

    if (!cmd) {
        console.log('Viable commands are: ', Object.keys(commands));
        process.exit(99);
    }

    const filepath = path.resolve(__dirname, '../../data/job_lists.yaml');
    console.log(`[INFO] Reading URLs from YAML: ${filepath}`);
    const data = yaml.load(fs.readFileSync(filepath, { encoding: 'utf-8' }));
    // @ts-ignore The yaml lib seems to have poor typing.
    const items: IYamlData[] = data?.items;

    cmd(items, ...args).then(
        () => {
            console.log('Done.');
        },
        (err) => {
            console.error('We ran into some issues...');
            console.error(err);
        }
    );
}
