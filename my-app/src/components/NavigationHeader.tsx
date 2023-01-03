import React from 'react';
import { Link } from 'react-router-dom';

import '../NavigationHeader.css';

const NavigationHeader = () => {
    return (
        <div className='nav-header-div'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/courses">Courses</Link>
            </nav>
        </div>
    )
}

export default NavigationHeader;