import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [ jobs, setJobs ] = useState([]);

  useEffect(() => {
    const url = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';
    const fetchData = async () => {
      const request = await axios.get(url);
      setJobs(request.data);
    }
    fetchData();
  },[]);

  return (
    <div className="app">
      <Navbar />
      {/* Job Library */}  
    </div>
  )
}

export default App;
