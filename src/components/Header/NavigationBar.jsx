import React from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import websiteData from "../../utils/websiteData.jsx";
import resumeData from "../../utils/resumeData.jsx";
import CustomButton from "../Button/Button.jsx";
import {Telegram} from "@mui/icons-material";

const NavigationBar = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <nav className="header">
                {/* Home Link */}
                <Link as={NavLink} to="/">
                    <div className="header_home">
                        <HomeIcon />
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="nav_links">
                    {Object.keys(websiteData.pages).map((key, index) => (
                        <Link
                            to={websiteData.pages[key].path}
                            key={index}
                            className={location.pathname === websiteData.pages[key].path ? "active_link" : "inactive_link"}
                        >
                            {websiteData.pages[key].name}
                        </Link>
                    ))}
                </div>

                {/* Socials and Button */}
                <div className="socials_container">
                    {Object.keys(resumeData.socials).map(key => (
                        <a key={key} href={resumeData.socials[key].url} target="_blank" rel="noopener noreferrer">
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton text="Email Me" icon={<Telegram />} link="mailto:castroalexander1995@outlook.com" />
                </div>
            </nav>
        </React.Fragment>
    )

}

export default NavigationBar;