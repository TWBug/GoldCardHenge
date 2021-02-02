import assert from 'assert';
import fs from 'fs';
import CakeResumeAdapter from './adapters/cakeresume';
import { IAdapter, IAdapterConstructor, IAdapterOutput } from './types/adapter';
import yaml from 'js-yaml';
import crc from 'crc';
import sluggify from 'limax';

// import db from './db';
import path from 'path';

const DEBUG = !!process.env.DEBUG;

interface IDBRowJob extends IAdapterOutput {
    badges: string[];
}

const MAPPINGS: { [k: string]: IAdapterConstructor } = {
    'www.cakeresume.com': CakeResumeAdapter,
};

const getAdapter = (url: string): IAdapter => {
    const { host } = new URL(url);
    const Adapter = MAPPINGS[host];

    assert(Adapter, `No adapter found for "${host}"`);

    return new Adapter(url);
};

// Example URL: 'https://www.cakeresume.com/jobs?q=project%20manager&refinementList%5Blang_name%5D%5B0%5D=English&refinementList%5Bsalary_type%5D=per_year&range%5Bsalary_range%5D%5Bmin%5D=1000000&page=2';
const getJobs = async (url: string) => {
    assert(url, 'Must provide a URL');

    const adapter = getAdapter(url);

    const headers = {
        // @note This awesome user agent string is meant to not trigger any
        // automated scrape prevention, but also inform the recipient of our
        // presence should they decide to view their logs. They've already
        // agreed to let us scrape their site, but who knows if htey utilize any
        // intermediate scrape prevention software that they don't even know
        // about. After all, they are a job board.
        'User-Agent':
            'Mozilla/5.0 (Macintosh) AppleWebKit/537 (KHTML, like Gecko) Chrome/88.TEGO.special Safari/537.TEGO.special',
    };

    // This could throw, but We'll catch at a higher level
    return await adapter.getJobs({ headers });
};

interface IYamlData {
    label: string;
    url: string;
}

const main = async () => {
    const filepath = path.resolve(__dirname, '../../data/job_lists.yaml');
    console.log(`[INFO] Reading URLs from YAML: ${filepath}`);
    const data = yaml.load(fs.readFileSync(filepath, { encoding: 'utf-8' }));
    // @ts-ignore
    const urls: IYamlData[] = data?.items;
    // const result: IDBRowJob[][] = [];

    const result: IDBRowJob[][] = await Promise.all(
        urls.map(({ label, url }) => {
            return getJobs(url)
                .then((xs) => {
                    return xs.map((x) => ({ ...x, badges: [label] }));
                })
                .catch((err) => {
                    console.error('[SKIP] The following URL errored. Ignoring and continuing: ', x);
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
    const { description, ...frontmatter } = x;
    const fm = yaml.dump(frontmatter);
    return `---\n${fm}\n---\n\n${description}`;
};

if (require.main === module) {
    main().then(
        () => {
            console.log('Done.');
        },
        (err) => {
            console.error('We ran into some issues...');
            console.error(err);
        }
    );
}
