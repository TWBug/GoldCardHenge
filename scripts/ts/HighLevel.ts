import assert from 'assert';
import fs from 'fs';

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
const script = document.getElementById('__NEXT_DATA__');
const jsonData=JSON.parse(script.textContent);
const jobCollection = jsonData.props.pageProps.initialState.job.graphQlJobCollection;
const jobEntities = jobCollection.entities;

const jobs: Job[] = Object.values(jobEntities).map((jobData) => adaptJob(jobData));

console.log(jobs);
  
}