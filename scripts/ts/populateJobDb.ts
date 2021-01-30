import assert from 'assert';
import fs from 'fs';
import CakeResumeAdapter from './adapters/cakeresume';
import { IAdapter, IAdapterConstructor, IDBRowJob } from './types/adapter';
import yaml from 'js-yaml';

import db from './db';
import { pathCase } from 'change-case';
import path from 'path';

const DEBUG = !!process.env.DEBUG

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

const main = async () => {
    const filepath = path.resolve(__dirname, '../../data/job_lists.yaml');
    console.log(`[INFO] Reading URLs from YAML: ${filepath}`);
    const data = yaml.load(fs.readFileSync(filepath, { encoding: 'utf-8' }));
    // @ts-ignore
    const urls: string[] = data?.items?.map((x) => x.url);
    // const result: IDBRowJob[][] = [];

    const result: IDBRowJob[][] = await Promise.all(
        urls.map((x) => {
            return getJobs(x).catch((err) => {
                console.error('[SKIP] The following URL errored. Ignoring and continuing: ', x);
                if (DEBUG) {
                    console.log('DEBUG flag set. Error follows:')
                    console.error(err);
                }
                return []; // Ignore the error by returning the appropriate type
            });
        })
    );

    const jobs = result.flat();
    const outfile = 'dist/jobs.json'

    // Ensure that the output dir exists before writing
    fs.mkdirSync(path.dirname(outfile))
    fs.writeFileSync(outfile, JSON.stringify(jobs, null, 2), { encoding: 'utf-8' });

    console.log();
    console.log(`    ${jobs.length} jobs written to ->  ${outfile}`);
    console.log();
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
