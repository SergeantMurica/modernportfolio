import React, {useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
import websiteData from "../../utils/websiteData.jsx";
import resumeData from "../../utils/resumeData.jsx";
import CustomButton from "../Button/Button.jsx";
import {Telegram} from "@mui/icons-material";



const NavigationDrop = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = () => {
        setIsOpen(!isOpen);
    };

    const toggleSocialDropdown = () => {
        setIsSocialOpen(!isSocialOpen);
    };

    return (
        <React.Fragment>
            <nav className="header">
                {/* Home Link */}
                <Link as={NavLink} to="/">
                    <div className="header_home">
                        <HomeIcon/>
                    </div>
                </Link>
                <div className="dropdown">
                    <button onClick={toggleDropdown} className="dropdown-button">
                        <MenuIcon />
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu">
                            {Object.keys(websiteData.pages).map((key, index) => (
                                <Link
                                    to={websiteData.pages[key].path}
                                    key={index}
                                    className={location.pathname === websiteData.pages[key].path ? "active_link" : "inactive_link"}
                                    onClick={() => handleOptionClick(websiteData.pages[key].path)}>
                                    {websiteData.pages[key].name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className="dropdown_social">
                    <button onClick={toggleSocialDropdown} className="dropdown-button">
                        Socials
                    </button>
                    {isSocialOpen && (
                        <div className="dropdown-menu socials_container">
                            {/* Socials and Button */}
                            {Object.keys(resumeData.socials).map(key => (
                                <a key={key}
                                   href={resumeData.socials[key].url}
                                   target="_blank" rel="noopener noreferrer">
                                    {resumeData.socials[key].icon}
                                </a>
                            ))}

                        </div>
                    )}
                </div>
                <div className="email_me">
                    <CustomButton text="Email Me" icon={<Telegram/>} link="mailto:castroalexander1995@outlook.com"/>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavigationDrop;