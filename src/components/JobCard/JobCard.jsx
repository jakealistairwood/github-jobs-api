import React from 'react';
import styles from './JobCard.module.scss';

const JobCard = ({ job }) => {
    return (
        <div className={styles.jobCard}>
            <div className={styles.jobCard__logo}>
                <img src="" alt=""/>
            </div>
            <div className={styles.jobCard__body}>
                <p className={styles.jobCard__postDate}>5 hrs ago</p>
                <div className={styles.jobCard__description}>
                    <h3>{job.title}</h3>
                    <p className={styles.jobCard__jobCompany}>company</p>
                </div>
                <p className="jobCard__location">location</p>
            </div>
        </div>
    )
}

export default JobCard;
