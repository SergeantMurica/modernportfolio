import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import websiteData from '../../utils/websiteData.jsx';
import resumeData from '../../utils/resumeData.jsx';
import CustomButton from '../Button/Button.jsx';
import './NavigationBar.css';

const NavigationBar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className={`navbar_home ${location.pathname === "/" ? 'active' : ''}`}>
                <HomeIcon fontSize="large" />
            </Link>
            <div className="navbar_links">
                {Object.keys(websiteData.pages).map((key, index) => (
                    <NavLink
                        key={index}
                        to={websiteData.pages[key].path}
                        className={`nav_item ${location.pathname === websiteData.pages[key].path ? 'active' : ''}`}
                    >
                        {websiteData.pages[key].name}
                    </NavLink>
                ))}
            </div>
            <div className="navbar_email">
                <CustomButton text="Email Me" link="mailto:castroalexander1995@outlook.com" />
            </div>
        </nav>
    );
};

export default NavigationBar;
