import cheerio from 'cheerio';
import got from 'got';
import fs from 'fs';
import path from 'path';
import assert from 'assert';
import typescript from 'typescript';
import { __APP_INITIAL_REDUX_STATE__ } from '../types/cakeresume';

type CakeAppState = typeof __APP_INITIAL_REDUX_STATE__;

const main = async () => {
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
    const url =
        'https://www.cakeresume.com/jobs?q=project%20manager&refinementList%5Blang_name%5D%5B0%5D=English&refinementList%5Bsalary_type%5D=per_year&range%5Bsalary_range%5D%5Bmin%5D=1000000&page=2';

    console.info(`[FETCH] <- ${url}`);
    const res = await got(url, { headers });
    const $ = cheerio.load(res.body);
    const script = $('script').filter(
        (_, x) => !!$(x).html()?.includes('__APP_INITIAL_REDUX_STATE__')
    );

    assert(script.length > 0, 'Could not locate app data script in request body. Exiting.');

    const raw = script.html();

    assert(raw, 'No inline script source found');

    const preJson = raw.slice(raw.indexOf('{')).replace(/undefined/g, 'null');
    try {
        const data: CakeAppState = JSON.parse(preJson);
        return { raw, data };
    } catch (err) {
        console.error('Error parsing JSON app state. Rethrowing to top lovel');
        throw err;
    }
};

main().then(
    ({ raw, data }) => {
        console.log('Complete');
        fs.writeFileSync('tmp/cake-jobs.raw.js', raw.replace(/^window/, 'module.exports'), {
            encoding: 'utf-8',
        });

        const result = data.jobSearch.jobResultsState.content;
        const total = result.nbHits;
        const pageCount = result.nbPages;
        const perPage = result.hitsPerPage;
        const currentPage = result.page;

        const hits = result.hits; // The meat
        const x = hits[0];
        x.location_list;
        x.tag_list;

        fs.writeFileSync(
            'tmp/cake-job-hits.json',
            JSON.stringify(data.jobSearch.jobResultsState.content.hits, null, 2),
            {
                encoding: 'utf-8',
            }
        );
        fs.writeFileSync('tmp/cake-jobs.data.json', JSON.stringify(data, null, 2), {
            encoding: 'utf-8',
        });
    },
    (err) => {
        console.error('We ran into some issues...');
        console.error(err);
    }
);
