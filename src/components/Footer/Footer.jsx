import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="footer-text">
                    &copy; {new Date().getFullYear()} Alexander Castro
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-text">
                    Designed, Developed, and Maintained by{" "}
                    <a href="/" target="-blank" rel="noopener noreferrer" className="footer-link">
                        Alexander Castro
                    </a>.
                    <br/>
                    Create your own portfolio from{" "}
                    <a href="https://github.com/SergeantMurica/modernportfolio" target="-blank"
                       rel="noopener noreferrer" className="footer-link">
                        My Github Page
                    </a>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
