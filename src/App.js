import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
// import HireMe from './PortfolioContainer/HireMe/HireMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      {/* <HireMe /> */}
    </div>
  );
}

export default App;
