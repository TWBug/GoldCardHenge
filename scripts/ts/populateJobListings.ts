import cheerio from 'cheerio';
import got from 'got';
import fs from 'fs';
import path from 'path';

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

    if (!script.length) {
        console.log('Could not locate app data script in request body. Exiting.');
        return;
    }

    const raw = script.html();

    if (!raw) {
        console.log('No inline script source found');
        return;
    }

    const preJson = raw.slice(raw.indexOf('{')).replace(/undefined/g, 'null');
    try {
        const data = JSON.parse(preJson);
        return data;
    } catch (err) {
        console.error('Error parsing JSON app state. Rethrowing to top lovel');
        throw err;
    }
};

main().then(
    (data) => {
        console.log('Complete');
        fs.writeFileSync(
            'tmp/cake-jobs.data.json',
            JSON.stringify(data.jobSearch.jobResultsState.content.hits, null, 2),
            {
                encoding: 'utf-8',
            }
        );
    },
    (err) => {
        console.error('We ran into some issues...');
        console.error(err);
    }
);
