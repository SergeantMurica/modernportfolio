import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CustomButton from "../Button/Button.jsx";
import {
    Nav,
    Navbar,
} from "react-bootstrap";
import { NavLink, useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from "../../utils/resumeData.jsx";
import websiteData from "../../utils/websiteData.jsx";
import { Telegram } from "@mui/icons-material";
import './Header.css';
import Homepage from "../../pages/Home/Home.jsx";
import Portfolio from "../../pages/Portfolio/Portfolio.jsx";
import Resume from "../../pages/Resume/Resume.jsx";
import Blog from "../../pages/Blog/Blog.jsx";
import Contact from "../../pages/Contact/Contact.jsx";

const NavigationBar = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <Navbar expand="lg" sticky="top" className="header">
                {/* Home Link */}
                <Nav.Link as={NavLink} to="/">
                    <Navbar.Brand className="header_home">
                        <HomeIcon />
                    </Navbar.Brand>
                </Nav.Link>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        {Object.keys(websiteData.pages).map((key, index) => (
                            <Nav.Link
                                as={NavLink}
                                to={websiteData.pages[key].path}
                                key={index}
                                className={location.pathname === websiteData.pages[key].path ? "active_link" : "inactive_link"}
                            >
                                {websiteData.pages[key].name}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <div className="socials_container">
                        {Object.keys(resumeData.socials).map(key => (
                            <a key={key} href={resumeData.socials[key].url} target="_blank" rel="noopener noreferrer">
                                {resumeData.socials[key].icon}
                            </a>
                        ))}
                        <CustomButton text="Email Me" icon={<Telegram />} link="mailto:castroalexander1995@outlook.com" />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
};

const Header = () => {
    return (
        <Router>
            <NavigationBar />
            <div className="header_container">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Header;
