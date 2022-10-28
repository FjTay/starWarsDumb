import './App.css';
import News from './news';
import Contact from './contact';
import AboutUs from './aboutUs';
import { BrowserRouter as useParams, Route ,Link, Routes} from "react-router-dom";
import Person from './person';
import Home from './home';
import PlanetPopUp from './planetPopUp';
import { useEffect, useRef, useState, createContext, useContext, useMemo } from 'react';
import planets from './planets';
import primaryData from './primaryData';

export const PlanetContext = createContext()

function App() {

  const [planetsData, setPlanetsData] = useState({planets})

  return (
    <div className="App">
      <header>
        <nav>
          <ul id="navBar">
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
          </ul>
        </nav>
        <div>
          Logo
          <li><Link to="/">Home</Link></li>
        </div>
        <div>
          Right DIV
        </div>
      </header>
        <PlanetContext.Provider value={[planetsData, setPlanetsData]}>
          <Routes>
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="aboutUs/:person" element={<Person />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planets/:planet" element={<PlanetPopUp/>} />
          </Routes>
          <Home primaryData={primaryData}/>
        </PlanetContext.Provider>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
