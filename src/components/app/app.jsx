import React from 'react';
import Nav from '../nav/nav';
import Header from '../header/header';
import Schedule from '../schedule/schedule';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './app.css';
import Player from '../player/player';
import Contact from '../contact/contact';
import Podcasts from '../podcasts/podcasts'
import Podcast from '../podcasts/podcast';
import About from '../about/about';
import Clock from '../clock/clock';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='content'>
          <Routes>
            <Route index element={<Header />} />
            <Route path='/shows' element={<Schedule />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/podcasts' element={<Podcasts />} />
            <Route path='/podcast/:key' element={<Podcast />} />
            <Route path='/djs/:dj' element={<Podcast />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <div className="bottom-spacer"></div>
        </div>
      </div>      
      <div className='bottom-player'>
          <Player />
        </div>
    </Router >
  );
}

export default App;
