import React, { useState } from 'react';
import styles from './JobLibrary.module.scss';
import JobCard from '../JobCard';

const JobLibrary = ({ jobs }) => {

    const [ jobsOnDisplay, setJobsOnDisplay ] = useState(21);

    const renderNextJobs = () => {
        setJobsOnDisplay((previousJobs) => previousJobs + 21);
    }

    const renderJobCards = (job) => (
        <JobCard key={job.id} job={job} />
    )

    return (
        <>
            <div className={styles.jobLibrary}>
                {jobs.slice(0, jobsOnDisplay).map(renderJobCards)}
            </div>
            <div className={styles.button__container}>
                <button className={styles.primaryBtn} onClick={renderNextJobs}>Load More</button>
            </div>
        </>
    )
}

export default JobLibrary;
