import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../NavigationHeader.css';

const NavigationHeader = () => {
	const { pathname } = useLocation();
	console.log(pathname);
    return (
        <div className='nav-header-div'>
            <nav>
                <Link className={pathname === "/" ? 'active' : 'inactive'} to="/">Home</Link>
                <Link className={pathname === "/projects" ? 'active' : 'inactive'} to="/projects">Projects</Link>
                <Link className={pathname === "/experience" ? 'active' : 'inactive'} to="/experience">Experience</Link>
                <Link className={pathname === "/courses" ? 'active' : 'inactive'} to="/courses">Courses</Link>
				<Link className={pathname === "/about" ? 'active' : 'inactive'} to="/">About</Link>
            </nav>
			<hr></hr>
        </div>
    )
}

export default NavigationHeader;