import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import ErrorPage from './PortfolioContainer/ErrorPage/ErrorPage';
import './App.css';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import NavBar from './PortfolioContainer/NavBar/NavBar';
// import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Resume />
      <ContactMe />

    </div>
  );
}

export default App;
