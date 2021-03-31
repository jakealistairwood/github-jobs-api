import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import JobLibrary from './components/JobLibrary';
// import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyles } from './themes';

const StyledApp = styled.div``

const App = () => {
  const [ jobs, setJobs ] = useState([]);
  const [ isToggled, setIsToggled ] = useState(false);
  const [ theme, setTheme ] = useState('light');

  useEffect(() => {
    const url = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';
    const fetchData = async () => {
      const request = await axios.get(url);
      setJobs(request.data);
    }
    fetchData();
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
        <JobLibrary jobs={jobs} />
        {/* <Route path="/" component={JobLibrary} /> */}
      </StyledApp>
    </ThemeProvider>  
  )
}

export default App;
