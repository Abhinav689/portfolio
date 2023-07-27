import React from "react";
import './index.css'
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Education from './Components/Education';


function App() {
  return (
    <div>
     
      
      <Router>
  
        <Routes>
          
          <Route path='/'   element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contactme' element={<Contact/>} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
