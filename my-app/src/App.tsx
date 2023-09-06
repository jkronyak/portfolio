import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Courses from './pages/Courses/Courses';

function App() {
  return (
    <div className="App">
	  <div className='App-body'>
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
	  <Footer/>
	  </div>
    </div>
  );
}

export default App;
