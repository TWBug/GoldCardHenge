import cheerio from 'cheerio';
import got from 'got';
import assert from 'assert';
import { __APP_INITIAL_REDUX_STATE__ } from '../types/cakeresume';
import { IAdapter } from '../types/adapter';
import { getHeaders } from './utils';
import vm from 'vm';
import { debug, trace } from 'console';

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

    getResultsFromData(data: typeof __APP_INITIAL_REDUX_STATE__) {
        // @ts-ignore
        const { content, rawResults } = data.props.pageProps.serverState.initialResults.Job.jobResultsState;
        let result;
        
        console.log(rawResults);

        // Explanation: Content is a nice aggregated stats object, however, it
        // is not always present. What we get instead is an array of individual
        // stats objects which we can then aggregate together on our own.
        if (rawResults) {
            result = rawResults.reduce((agg, x) => {
                for (const [k, v] of Object.entries(x)) {
                    if (!(k in agg)) {
                        agg[k] = v;
                    } else if (Array.isArray(agg[k])) {
                        agg[k] = agg[k].concat(v);
                    } else if (typeof agg[k] === 'number') {
                        agg[k] = agg[k] + v;
                    } else {
                        // No combination is the base case
                        agg[k] = v;
                    }
                }
                return agg;
            }, {});
        }

        assert(result, 'Could not get result for url: ' + this.url);

        return result;
    }

    async getJobCount() {
        const data = await this.populateData();
        const result = this.getResultsFromData(data);
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

        // This is a temporary context which we will use to grab the globals set in the script
        const ctx = { window: {} };
        vm.runInNewContext(raw, ctx);

        // @ts-ignore
        const data: CakeAppState | undefined = ctx.window.__APP_INITIAL_REDUX_STATE__;

        assert(data, 'No app state detected on page: ' + this.url);

        // @note It's very important we assign here.
        // Get raw might be worth revisiting since it's quite ugly to have it
        // operate with such side effects.
        this.raw = raw;
        this.data = data;

        return data;
    }

    async getJobs(options = {}) {
        console.info(`[FETCH] <- ${this.url}`);
        const data = await this.populateData();

        assert(data, 'No app state detected on page: ' + this.url);

        // NOTE: As of this commit the data format seems to have changed. We are
        // no longer getting uniform objects. Not all returned objects include
        // the full data set of a job listin. Using the presence of `title` as a
        // heuristic.
        const result = this.getResultsFromData(data);
        const hits = result.hits.filter((x) => x.title); // The meat. See NOTE
        const baseUrl = 'http://114.32.58.99:8088';

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
