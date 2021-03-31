import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import JobLibrary from './components/JobLibrary';
import Searchbar from './components/Searchbar';
// import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyles } from './themes';

const StyledApp = styled.div``

const App = () => {

  const [ isToggled, setIsToggled ] = useState(false);
  const [ theme, setTheme ] = useState('light');

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
        <Searchbar />
        <JobLibrary />
        {/* <Route path="/" component={JobLibrary} /> */}
      </StyledApp>
    </ThemeProvider>  
  )
}

export default App;
