import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import JobLibrary from './components/JobLibrary';
import Searchbar from './components/Searchbar';
import LoadingScreen from './components/LoadingScreen';
// import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyles } from './themes';

const StyledApp = styled.div``

const App = () => {
  // State control for API requests
  const [ jobs, setJobs ] = useState([]);
  const [ searchJobs, setSearchJobs ] = useState("");
  const [ jobLocation, setJobLocation ] = useState("");
  const [ fullTime, setFullTime ] = useState(false);
  // State control for loading screen
  const [ loading, setLoading ] = useState(false);
  // State control for light/dark mode
  const [ isToggled, setIsToggled ] = useState(false);
  const [ theme, setTheme ] = useState('light'); 

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
  },[]);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <StyledApp className="app">
        <Navbar 
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
          toggleTheme={toggleTheme}
        />
        <Searchbar
          searchJobs={searchJobs}
          setSearchJobs={setSearchJobs}
          jobLocation={jobLocation}
          setJobLocation={setJobLocation}
          fullTime={fullTime}
          setFullTime={setFullTime}
        />
        {loading ? <JobLibrary jobs={jobs} /> : <LoadingScreen />}
        {/* <Route path="/" component={JobLibrary} /> */}
      </StyledApp>
    </ThemeProvider>  
  )
}

export default App;
