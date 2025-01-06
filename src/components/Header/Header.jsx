import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import CustomButton from "../Button/Button.jsx";
import {Nav, Navbar, NavLink} from "react-bootstrap";
import resumeData from "../../utils/resumeData.jsx";
import {Telegram} from "@mui/icons-material";



const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
        <Navbar expand="lg" sticky="top" className='header'>
            {/*HomeLink*/}
            <Nav.Link as={NavLink} to="/">
                <Navbar.Brand className='header_home'>
                    <HomeIcon/>
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle/>

            <Navbar.Collapse>
                <Nav>
                    {/*Portfolio*/}
                    <Nav.Link as={NavLink} to="/Portfolio" className={pathName === '/Portfolio' ? 'active_link' : 'inactive_link'}>Portfolio</Nav.Link>
                    {/*Resume*/}
                    <Nav.Link as={NavLink} to="/Resume" className={pathName === '/Resume' ? 'active_link' : 'inactive_link'}>Resume</Nav.Link>
                    {/*Blog*/}
                    <Nav.Link as={NavLink} to="/Blog" className={pathName === '/Blog' ? 'active_link' : 'inactive_link'}>Blog</Nav.Link>
                    {/*Contact*/}
                    <Nav.Link as={NavLink} to="/Contact" className={pathName === '/Contact' ? 'active_link' : 'inactive_link'}>Contact</Nav.Link>
                </Nav>

                <div className='socials_container'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].url} target="_blank">{resumeData.socials[key].icon}</a>
                    ))}
                    <CustomButton text={'Email Me'} icon={<Telegram/>} href={'mailto:' + resumeData.email}/>
                </div>
            </Navbar.Collapse>

        </Navbar>

    )
}
export default Header;