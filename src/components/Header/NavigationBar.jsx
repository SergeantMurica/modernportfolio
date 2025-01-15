import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import websiteData from '../../utils/websiteData.jsx';
import CustomButton from '../Button/Button.jsx';
import EmailIcon from '@mui/icons-material/Email';
import './NavigationBar.css';

const NavigationBar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
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
            <div className="navbar-email">
                <CustomButton text="Email Me" icon={<EmailIcon/>} link="mailto:castroalexander1995@outlook.com" />
            </div>
        </nav>
    );
};

export default NavigationBar;
