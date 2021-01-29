import fs from 'fs';
import assert from 'assert';
import CakeResumeAdapter from './adapters/cakeresume';
import { debug } from 'console';
import { IAdapterConstructor } from './types/adapter';

const MAPPINGS: { [k: string]: IAdapterConstructor } = {
    'www.cakeresume.com': CakeResumeAdapter,
};

// Example URL: 'https://www.cakeresume.com/jobs?q=project%20manager&refinementList%5Blang_name%5D%5B0%5D=English&refinementList%5Bsalary_type%5D=per_year&range%5Bsalary_range%5D%5Bmin%5D=1000000&page=2';
const main = async (url: string) => {
    assert(url, 'Must provide a URL');

    const { host } = new URL(url);
    const Adapter = MAPPINGS[host];

    assert(Adapter, `No adapter found for "${host}"`);

    const adapter = new Adapter(url);

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

    try {
        const jobs = await adapter.getJobs({ headers });
        const parsed = await adapter.getParsed();
        const raw = await adapter.getRaw();

        return { raw, jobs, parsed };
    } catch (err) {
        console.error('Error parsing JSON app state. Rethrowing to top lovel');
        throw err;
    }
};

main(process.argv[2]).then(
    ({ raw, jobs, parsed }) => {
        fs.writeFileSync('tmp/cake-jobs.raw.js', raw.replace(/^window/, 'module.exports'), {
            encoding: 'utf-8',
        });

        fs.writeFileSync('tmp/cake-jobs.parsed.json', JSON.stringify(parsed, null, 2), {
            encoding: 'utf-8',
        });

        fs.writeFileSync('tmp/cake-jobs.json', JSON.stringify(jobs, null, 2), {
            encoding: 'utf-8',
        });

        const titles = jobs
            .map((x) => `  -  ${x.title} (${x.company_name}) <${x.html_url}>`)
            .join('\n');

        console.log('Found jobs. For full job JSON and raw JSON output see:');
        console.log('  ./tmp/cake-jobs.json');
        console.log('  ./tmp/cake-jobs.raw.json');
        console.log('Jobs found:');
        console.log(titles);
        console.log();
    },
    (err) => {
        console.error('We ran into some issues...');
        console.error(err);
    }
);
