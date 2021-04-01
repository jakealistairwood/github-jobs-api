import React from 'react';
import styles from './JobLibrary.module.scss';
import JobCard from '../JobCard';

const JobLibrary = ({ jobs }) => {

    const renderJobCards = (job) => (
        <JobCard key={job.id} job={job} />
    )

    return (
        <div className={styles.jobLibrary}>
            {jobs.map(renderJobCards)}
        </div>
    )
}

export default JobLibrary;
