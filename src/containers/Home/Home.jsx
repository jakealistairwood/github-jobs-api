import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import axios from 'axios';
import Searchbar from '../../components/Searchbar';
import JobLibrary from '../../components/JobLibrary';
import LoadingScreen from '../../components/LoadingScreen';

const Home = (props) => {
    // State control for API requests
    const [ jobs, setJobs ] = useState([]);
    const [ searchJobs, setSearchJobs ] = useState("");
    const [ jobLocation, setJobLocation ] = useState("");
    const [ fullTime, setFullTime ] = useState(false);

    // State control for loading screen
    const [ loading, setLoading ] = useState(false);

    // API Search requests
    const searchByJobDescription = searchJobs ? `?description=${searchJobs}` : '';
    const searchByJobLocation = jobLocation ? `?location=${jobLocation}` : '';
    const jobFullTime = fullTime ? `?full_time=${fullTime}` : "";

    useEffect(() => {
        const url = `https://cors.bridged.cc/https://jobs.github.com/positions.json${searchByJobDescription}${searchByJobLocation}${jobFullTime}`;
        const fetchData = async () => {
          const request = await axios.get(url);
          setJobs(request.data);
        }
        fetchData();
        setLoading(true);
      },[searchByJobDescription, searchByJobLocation, jobFullTime]);

    return (
        <div className={styles.home}>
            <Searchbar
                searchJobs={searchJobs}
                setSearchJobs={setSearchJobs}
                jobLocation={jobLocation}
                setJobLocation={setJobLocation}
                fullTime={fullTime}
                setFullTime={setFullTime}
            />
            {loading ? <JobLibrary jobs={jobs} /> : <LoadingScreen />}    
        </div>
    )
}

export default Home;
