import cheerio from 'cheerio';
import got from 'got';
import fs from 'fs';
import assert from 'assert';
import { __APP_INITIAL_REDUX_STATE__ } from '../types/cakeresume';
import { IAdapter } from '../types/adapter';

type CakeAppState = typeof __APP_INITIAL_REDUX_STATE__;

export default class CakeResumeAdapter implements IAdapter {
    url: string;
    data: null | CakeAppState = null;
    raw: null | string = null;
    constructor(url: string) {
        this.url = url;
    }

    async getRaw() {
        if (this.raw) return this.raw;
        await this.getJobs();
        return this.raw;
    }

    async getJobs(options = {}) {
        console.info(`[FETCH] <- ${this.url}`);
        const res = await got(this.url, options);
        const $ = cheerio.load(res.body);
        const script = $('script').filter(
            (_, x) => !!$(x).html()?.includes('__APP_INITIAL_REDUX_STATE__')
        );

        assert(script.length > 0, 'Could not locate app data script in request body. Exiting.');

        const raw = script.html();

        assert(raw, 'No inline script source found');

        const preJson = raw.slice(raw.indexOf('{')).replace(/undefined/g, 'null');
        const data: CakeAppState = JSON.parse(preJson);

        // @note It's very important we assign here.
        // Get raw might be worth revisiting since it's quite ugly to have it
        // operate with such side effects.
        this.raw = raw;
        this.data = data;

        const result = data.jobSearch.jobResultsState.content;
        const total = result.nbHits;
        const pageCount = result.nbPages;
        const perPage = result.hitsPerPage;
        const currentPage = result.page;

        const hits = result.hits; // The meat
        const x = hits[0];
        x.location_list;
        x.tag_list;

        return hits.map((x) => {
            return {
                source: 'Cake Resume',
                initial_id: x.objectID,
                created_at: new Date(),
                title: x.title,
                html_url: '', // @todo Hrm..
                salary_text: x.salary_range.map((y) => x.salary_currency + y).join(' - '),
                location_list: x.location_list,
                tag_list: x.tag_list,
            };
        });
    }
}
