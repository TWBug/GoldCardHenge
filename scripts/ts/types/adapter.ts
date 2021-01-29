import { Defaults as RequestOptions } from 'got';

export interface IDBRowJob {
    source: any;

    // An identifier within the original. Wanted to avoid "source_id" lest there
    // be confusion whether it's the id _of_ the source or the id of the record
    // within the source.
    initial_id: string;

    // This is the datetime that the record was created. This data does not come
    // from the source itself.
    // In the DB this will probably be stored as a string...
    created_at: Date;

    // Job title
    title: string;

    // This is the external URL which we will link to
    html_url: string;

    // The format of the salary is not well defined so we must be flexible with
    // it.
    salary_text: string;

    // Where is this job
    location_list: string[];

    // Any user-defined tags
    tag_list: string[];
}

export interface IAdapter {
    getJobs(options?: RequestOptions): Promise<IDBRowJob[]>;
    getRaw(): Promise<any>;
}
