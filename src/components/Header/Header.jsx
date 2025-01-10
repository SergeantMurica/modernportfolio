import React, { useState, useEffect } from 'react';
import CustomButton from "../Button/Button.jsx";
import {
    Button,
    Form,
    FormGroup,
    FormControl,
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    DropdownButton,
    Container
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useLocation, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import resumeData from "../../utils/resumeData.jsx";
import websiteData from "../../utils/websiteData.jsx";
import { Telegram } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import './Header.css';
import Homepage from "../../pages/Home/Home.jsx";
import Portfolio from "../../pages/Portfolio/Portfolio.jsx";
import Resume from "../../pages/Resume/Resume.jsx";
import Blog from "../../pages/Blog/Blog.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import NavigationBar from "./NavigationBar.jsx";
import NavigationDrop from "./NavigationDrop.jsx";



const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Router>
            <div>
                {isMobile ? <NavigationDrop /> : <NavigationBar />}
            </div>
            <div className="header_container">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Resume" element={<Resume/>}/>
                    <Route path="/Blog" element={<Blog/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default Header;
