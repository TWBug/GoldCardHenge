import cheerio from 'cheerio';
import got from 'got';
import assert from 'assert';
import { __APP_INITIAL_REDUX_STATE__ } from '../types/cakeresume';
import { IAdapter } from '../types/adapter';
import { getHeaders } from './utils';

type CakeAppState = typeof __APP_INITIAL_REDUX_STATE__;

export default class CakeResumeAdapter implements IAdapter {
    url: string;
    hostname: string;
    data: null | CakeAppState = null;
    raw: null | string = null;
    $: null | cheerio.Root = null;

    constructor(url: string) {
        this.url = url;
        this.hostname = new URL(url).hostname;
    }

    // Get the cheerio markup for a page. The url is an argument so that you can
    // get the markup for separately paginated pages as well
    async getMarkup(url = this.url) {
        if (this.$) return this.$;

        const res = await got(url, { headers: getHeaders(url) });
        const $ = cheerio.load(res.body);
        this.$ = $;
        return $;
    }

    async getPageTitle() {
        const $ = await this.getMarkup();
        return $('title').text();
    }

    async getJobCount() {
        const data = await this.populateData();
        const result = data.jobSearch.jobResultsState.content;
        const total = result.nbHits;
        return total;
    }

    async getRaw() {
        if (!this.raw) {
            await this.getJobs();
        }
        return this.raw as string;
    }

    async getParsed() {
        if (!this.data) {
            await this.getJobs();
        }
        return this.data as CakeAppState;
    }

    async populateData() {
        if (this.data) return this.data;

        const $ = await this.getMarkup();
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

        return data;
    }

    async getJobs(options = {}) {
        console.info(`[FETCH] <- ${this.url}`);
        const res = await got(this.url, {
            headers: getHeaders(this.url),
            ...options,
        });
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

        const baseUrl = 'https://www.cakeresume.com';

        return hits.map((x) => {
            const companyUrl = `${baseUrl}/companies/${x.page.path}`;
            const jobUrl = `${companyUrl}/jobs/${x.path}`;
            return {
                // Data source
                data_source_name: 'Cake Resume',
                data_source_hostname: this.hostname,
                data_source_url: this.url,
                data_source_internal_id: x.objectID,

                // @note This is the date we scraped the record at, not the date
                // it was created in the original system we are scraping it
                // from.
                fetched_at: new Date(),

                // About the job itself
                title: x.title,
                job_url: jobUrl,
                date: new Date(x.created_at),
                company_name: x.page.name,
                company_page_url: companyUrl,
                company_logo_url: x.page.logo.medium,
                salary_text: x.salary_range.map((y) => x.salary_currency + y).join(' - '),
                salary_currency: x.salary_currency,
                salary_type: x.salary_type,
                salary_min: x.salary_min,
                salary_max: x.salary_max,
                location_list: x.location_list,
                job_tags: x.tag_list,
                description: x.description_plain_text,
            };
        });
    }
}
