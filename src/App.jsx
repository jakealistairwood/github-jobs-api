import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyles } from './themes';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import JobDetails from './containers/JobDetails';

const StyledApp = styled.div``

const App = () => {

  // State control for light/dark mode
  const [ isToggled, setIsToggled ] = useState(false);
  const [ theme, setTheme ] = useState('light'); 

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyles />
        <StyledApp className="app">
          <Navbar 
            isToggled={isToggled} 
            onToggle={() => setIsToggled(!isToggled)} 
            toggleTheme={toggleTheme} 
          />
          <Switch>
            <Route 
              exact 
              path="/" 
              render={(props) => (
                <Home {...props} />
              )} 
            />
            <Route path="/job/:id" component={JobDetails} />
          </Switch>
        </StyledApp>
      </ThemeProvider> 
    </Router> 
  )
}

export default App;
