import React from 'react';
import styles from './JobCard.module.scss';

const JobCard = ({ job }) => {
    return (
        <div className={styles.jobCard}>
            <div className={styles.jobCard__logo}>
                <img src={job.company_logo} alt=""/>
            </div>
            <div className={styles.jobCard__body}>
                <p className={styles.jobCard__postDate}>5h ago . Full Time</p>
                <div className={styles.jobCard__description}>
                    <h3>{job.title}</h3>
                    <p className={styles.jobCard__jobCompany}>{job.company}</p>
                </div>
                <p className={styles.jobCard__location}>{job.location}</p>
            </div>
        </div>
    )
}

export default JobCard;
