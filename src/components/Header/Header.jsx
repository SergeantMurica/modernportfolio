import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CustomButton from "../Button/Button.jsx";
import {
    Button,
    Nav,
    Navbar,
    Form,
    FormControl,
    NavDropdown
} from "react-bootstrap";
import { Link, NavLink, useNavigate, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from "../../utils/resumeData.jsx";
import {Telegram} from "@mui/icons-material";
import './Header.css'



const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const link = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/Portfolio" },
        { name: "Resume", path: "/Resume" },
        { name: "Blog", path: "/Blog" },
        { name: "Contact", path: "/Contact" },
    ];

    return (
        <Navbar expand="lg" sticky="top" className='header'>
            {/*HomeLink*/}
            <Nav.Link as={NavLink} to="/" key={link.path} onClick={() => navigate("/")}>
                <Navbar.Brand className='header_home'>
                    <HomeIcon/>
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle/>

            <Navbar.Collapse>
                <Nav>
                    {/*Portfolio*/}
                    <Nav.Link as={NavLink} to="/Portfolio" key={link.path} onClick={() => navigate(link.path)} className={location.pathname === link.path ? "active_link" : "inactive_link" }>Portfolio</Nav.Link>
                    {/*Resume*/}
                    <Nav.Link as={NavLink} to="/Resume" key={link.path} onClick={() => navigate(link.path)} className={location.pathname === link.path ? "active_link" : "inactive_link"}>Resume</Nav.Link>
                    {/*Blog*/}
                    <Nav.Link as={NavLink} to="/Blog" key={link.path} onClick={() => navigate(link.path)} className={location.pathname === link.path ? "active_link" : "inactive_link"}>Blog</Nav.Link>
                    {/*Contact*/}
                    <Nav.Link as={NavLink} to="/Contact" key={link.path} onClick={() => navigate(link.path)} className={location.pathname === link.path ? "active_link" : "inactive_link"}>Contact</Nav.Link>
                </Nav>

                <div className='socials_container'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].url} target="_blank">{resumeData.socials[key].icon}</a>
                    ))}
                    <CustomButton text={'Email Me'} icon={<Telegram/>} link={'mailto:castroalexander1995@outlook.com'}/>
                </div>
            </Navbar.Collapse>

        </Navbar>

    )
}
export default Header;