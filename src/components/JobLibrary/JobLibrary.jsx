import React, { useState, useEffect } from 'react';
import styles from './JobLibrary.module.scss';
import axios from 'axios';
import JobCard from '../JobCard';
import PuffLoader from 'react-spinners/PuffLoader';

const JobLibrary = () => {

    const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(false); 
    
    useEffect(() => {
        const url = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';
        const fetchData = async () => {
          const request = await axios.get(url);
          setJobs(request.data);
        }
        fetchData();
        setLoading(true);
      },[]);

    const renderJobCards = (job) => (
        <JobCard key={job.id} job={job} />
    )

    return (
        <div className={styles.jobLibrary}>
            {loading ? jobs.map(renderJobCards) : (
                <div className={styles.loaderContainer}>
                    <h3>Please wait while we load the data...</h3>
                    <PuffLoader className={styles.loader} />
                </div>
            )}
            {/* {jobs.map(renderJobCards)}
            <PuffLoader /> */}
        </div>
    )
}

export default JobLibrary;
