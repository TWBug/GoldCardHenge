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
    console.info(`[FETCH] <- ${url}`);

 fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const script = doc.getElementById('__NEXT_DATA__'); // replace with your desired element ID   
    
console.log(doc);
console.log(script);});
/*
const jsonData=JSON.parse(script.textContent);
const jobCollection = jsonData.props.pageProps.initialState.job.graphQlJobCollection;
const jobEntities = jobCollection.entities;

const jobs: Job[] = Object.values(jobEntities).map((jobData) => adaptJob(jobData));

console.log(jobs);
*/
  
}