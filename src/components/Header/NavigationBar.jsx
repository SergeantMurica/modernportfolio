import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import websiteData from '../../utils/websiteData.jsx';
import CustomButton from '../Button/Button.jsx';
import './NavigationBar.css';


const NavigationBar = () => {
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.body.classList.toggle('dark-mode', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
            <Link to="/" className={`navbar-home ${location.pathname === "/" ? 'active' : ''}`}>
                <HomeIcon fontSize="large" />
            </Link>
            <div className="navbar-links">
                {Object.keys(websiteData.pages).map((key, index) => (
                    <NavLink
                        key={index}
                        to={websiteData.pages[key].path}
                        className={`nav-item ${location.pathname === websiteData.pages[key].path ? 'active' : ''}`}
                    >
                        {websiteData.pages[key].name}
                    </NavLink>
                ))}
            </div>
            <div>
                <CustomButton text={isDarkMode ? "Light Mode" : "Dark Mode"} onClick={toggleTheme} icon={isDarkMode ? <LightModeIcon/> : <NightsStayIcon />}/>
            </div>
        </nav>
    );
};

export default NavigationBar;

