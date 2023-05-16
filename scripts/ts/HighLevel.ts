import cheerio from 'cheerio';
import got from 'got';
import fs from 'fs';
import path from 'path';


interface Job {
  aasmState?: string;
  contentUpdatedAt?: string;
  googlePlaces?: { name: string }[];
  jobType?: string;
  minWorkExpYear?: string;
  numberOfManagement?: string;
  numberOfOpenings?: number;
  path?: string;
  profession?: string;
  salaryCurrency?: string;
  salaryMax?: number;
  salaryMin?: number;
  salaryType?: string;
  seniorityLevel?: string;
  suspended?: boolean;
  tagsStrippedDescription?: string;
  title?: string;
  uniqueImpressionsCount?: number;
  tags?: any[];
}

function adaptJob(jobData: any): Job {
  return {
    title: jobData.title,
    salaryMin: jobData.salaryMin,
    salaryMax: jobData.salaryMax,
  };
}

function parseJobData(): void {
  const url = 'https://www.cakeresume.com/companies/taiwan-international-jobs/jobs';    
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
    console.info(`[FETCH] <- ${url}`);
    const res = await got(url, { headers });
    const $ = cheerio.load(res.body);
    const script = $('script').filter(
        (_, x) => !!$(x).html()?.includes('__NEXT_DATA__')

const jsonData=JSON.parse(script.textContent);
const jobCollection = jsonData.props.pageProps.initialState.job.graphQlJobCollection;
const jobEntities = jobCollection.entities;

const jobs: Job[] = Object.values(jobEntities).map((jobData) => adaptJob(jobData));

console.log(jobs);
  
}