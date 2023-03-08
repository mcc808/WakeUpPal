import React from 'react';
import './App.css';
import NavBar from './components/navBar'
/*import AlarmSelector from '/components/alarmSelector';*/
import Footer from './components/footer';
import logo from './logo.svg'; 
import Home from './pages/home';
import About from './pages/about';
import GlobalState from './state/globalState';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Alarm from './pages/alarm';

function App() {
  return (
  <GlobalState>
    <BrowserRouter>
      <div>
        <NavBar></NavBar>

          <Routes>
              <Route path='/' element={<Home />}   />
              <Route path='/home' element={<Home />}   />
              <Route path='/alarm' element={<Alarm />}   />
              <Route path='/about' element={<About />}   />
          </Routes>
        <Footer></Footer>
      
      </div>
    </BrowserRouter>
  </GlobalState>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
