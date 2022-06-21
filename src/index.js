import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import ErrorPage from './PortfolioContainer/ErrorPage/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="aboutme" exact element={<AboutMe />} />
        <Route path="contact" exact element={<ContactMe />} />
        <Route path="education" exact element={<Resume />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes> */}
    </BrowserRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
