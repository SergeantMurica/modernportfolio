import React from 'react';
import { Typography } from '@mui/material';
import './Footer.css';
import resumeData from "../../utils/resumeData.jsx";
import CustomButton from "../Button/Button.jsx";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_left">
                <Typography variant="body2" className="footer_text">
                    &copy; {new Date().getFullYear()} Alexander Castro
                </Typography>
            </div>
            <div className="footer_right">
                <Typography variant="body2" className="footer_text">
                    Designed, Developed, and Maintained by{" "}
                    <a href="/" target="_blank" rel="noopener noreferrer" className="footer_link">
                        Alexander Castro
                    </a>.
                    <br/>
                    Create your own portfolio from{" "}
                    <a href="https://github.com/SergeantMurica/modernportfolio" target="_blank"
                       rel="noopener noreferrer" className="footer_link">
                        My Github Page
                    </a>.
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
