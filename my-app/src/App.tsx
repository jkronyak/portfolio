import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NavigationHeader from './components/NavigationHeader';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavigationHeader/>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/courses" element={<Courses/>} />
        </Routes>

      
      </Router>
    </div>
  );
}

export default App;
