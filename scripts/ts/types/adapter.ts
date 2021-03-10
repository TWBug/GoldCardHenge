import { Defaults as RequestOptions } from 'got';

export interface IAdapterOutput {
    // The name of the data source. Ex: "Cake Resume"
    data_source_name: string;

    // The hostname of the web address
    data_source_hostname: string;

    // The full URL where the data was gathered from
    data_source_url: string;

    // An identifier within the original. Wanted to avoid "source_id" lest there
    // be confusion whether it's the id _of_ the source or the id of the record
    // within the source.
    data_source_internal_id: string;

    // This is the date attached to the job listing. It's nullable in case some providers don't have a date associated with them
    date: Date | null;

    // This is the datetime that the record was created. This data does not come
    // from the source itself.
    fetched_at: Date;

    // Job title
    title: string;

    // This is the external URL which we will link to
    job_url: string;

    // The format of the salary is not well defined so we must be flexible with
    // it.
    salary_text: string;

    // Where is this job
    location_list: string[];

    // Any user-defined tags
    job_tags: string[];

    // Name of the company this job is at
    company_name: string;

    // The URL to the companies web page
    company_page_url: string | null;

    // The image file location for the company logo
    company_logo_url: string | null;

    // The job description
    description: string | null;
}

export interface IAdapter {
    /**
     *
     * This is the main method for getting jobs. Instantiate with a URL and then call this.
     * @param options HTTP Options to pass to the got lib
     * @param extra Extra data which will be merged onto the output
     */
    getJobs(options?: Partial<RequestOptions>): Promise<IAdapterOutput[]>;

    // This is mainly for debugging. Get the raw output that will be parsed
    getRaw(): Promise<string>;

    // Get the parsed version of the raw output. Also useful for debugging. The
    // getJobs method returns the standardized data required by the db, but there
    // might be much more data in this parsed output.
    getParsed(): Promise<any>;

    // Get the total number of jobs for a given search
    getJobCount(): Promise<number>;

    // The title of the page
    getPageTitle(): Promise<string>;

    // The URL which will be scraped
    url: string;
}

export interface IAdapterConstructor {
    new (url: string): IAdapter;
}
