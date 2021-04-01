import React from 'react';
import styles from './JobDetails.module.scss';

const JobDetails = (props) => {
    console.log(props.location.state.job);

    const data = props.location.state.job;

    return (
        <div className={styles.jobDetails}>
            <header className={styles.jobDetails__header}>
                <div className={styles.jobDetails__headerImg}>
                    <img src={data.company_logo} alt="company-logo" />
                </div>
                <div className={styles.jobDetails__headerBody}>
                    <div>
                        <h3>{data.company}</h3>
                        <p>{data.company_url}</p>
                    </div>
                </div>
            </header>
            <h3>{data.title}</h3>
        </div>
    )
}

export default JobDetails;
