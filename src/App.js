import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Onboard from './Components/Administrator/Onboard';
import DisplayOnboard from './Components/Administrator/DisplayOnboard';
import Jml from './Components/Administrator/Jml';
import Demo from './Components/Administrator/Demo';
import SentMail from './Components/Administrator/SentMail'
import DashBoard from './Components/Administrator/DashBoard';
function App() {
  return (
  <Router>
    <Routes>
    <Route  element={<DashBoard />} path="/*"   ></Route>
  
    </Routes>
  </Router>
  );
}

export default App;
