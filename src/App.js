import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects.js';
import Information from './pages/Information.js';
import Sana from './projects/Sana.js';
import VirginPulse from './projects/VirginPulse.js';
import Yaro from './projects/Yaro.js';
import YaroApp from './projects/YaroApp.js';
import Web3App from './projects/Web3App.js';
import 'bootstrap/dist/js/bootstrap.js';
import './js/main.js';
import styles from './App.scss';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-bs-theme',
    darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <div className="container-xxl">
        <div className="navigation row py-5">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold fs-2 text-reset" to={'/'}>Joel Andrew Brown</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/information'}>Info</Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={toggleTheme}>
                      {darkMode ? <i className='bi bi-moon-fill'></i> : <i className='bi bi-sun-fill'></i>}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/information" element={<Information />} />
          <Route path="/projects/sana-benefits" element={<Sana />} />
          <Route path="/projects/yaro" element={<Yaro />} />
          <Route path="/projects/virgin-pulse" element={<VirginPulse />} />
          <Route path="/projects/yaro-app" element={<YaroApp />} />
          <Route path="/projects/web3-app" element={<Web3App />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
