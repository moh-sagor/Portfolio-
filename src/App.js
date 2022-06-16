import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import './App.css';
// import ContactMe from './PortfolioContainer/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      {/* <ContactMe /> */}
    </div>
  );
}

export default App;
