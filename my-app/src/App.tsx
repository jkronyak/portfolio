import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Courses from './pages/Courses';
import About from './pages/About';

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
				<Route path="/about" element={<About/>} />
			</Routes>
		</Router>
	  <Footer/>
	  </div>
    </div>
  );
}

export default App;
