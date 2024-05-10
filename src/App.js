import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Work from './pages/Work.js';
import Information from './pages/Information.js';
import Sana from './projects/Sana.js';
import VirginPulse from './projects/VirginPulse.js';
import Yaro from './projects/Yaro.js';
import HealthApp from './projects/HealthApp.js';
import styles from './App.scss';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="navigation row py-5">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to={'/'}>Joel Andrew Brown</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Work</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/information'}>Info</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Work />} />
          <Route path="/information" element={<Information />} />
          <Route path="/work/sana-benefits" element={<Sana />} />
          <Route path="/work/yaro" element={<Yaro />} />
          <Route path="/work/virgin-pulse" element={<VirginPulse />} />
          <Route path="/work/white-label-health-insurance-app" element={<HealthApp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
