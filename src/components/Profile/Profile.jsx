import React from 'react';
import CustomButton from '../Button/Button.jsx';
import BasicTimeline, { BasicTimelineItem } from '../Timeline/BasicTimeline.jsx';
import useIsMobile from "../../hooks/IsMobile.jsx";
import useTheme from '../../hooks/IsDarkMode.jsx';
import resumeData from '../../utils/resumeData.jsx';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import './Profile.css';

const Profile = () => {

    const isMobile = useIsMobile(1200);
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="profile-container">
                <div className="mobile-mode-toggle">
                    {isMobile ? (
                        <CustomButton
                            text={isDarkMode ? "Light" : "Dark"}
                            onClick={toggleTheme}
                            icon={isDarkMode ? <LightModeIcon/> : <NightsStayIcon/>}
                        />
                    ): null}
                </div>
            <div className="profile-header">
                <div className="profile-name">
                    {resumeData.name}
                </div>
                <div className="profile-title">
                    {resumeData.title}
                </div>
            </div>
            <figure className="profile-image">
                <img src={'/assets/images/profileImage.jpg'} alt="Profile Image"/>
            </figure>
            <div className="profile-information">
                <BasicTimeline icon={<PersonOutlineIcon/>}>
                    <BasicTimelineItem title="Current Job" text={resumeData.jobTitle}/>
                    <BasicTimelineItem title="Birthday" text={resumeData.birthday}/>
                    <BasicTimelineItem title="Email" text={resumeData.email} last={true}/>
                </BasicTimeline>
                <div className="resume-btn">
                    <CustomButton text="Download CV" icon={<DownloadIcon/>}/>
                </div>
            </div>

            <div className="socials">
                {Object.keys(resumeData.socials).map((key) => (
                    <a
                        key={key}
                        href={resumeData.socials[key].url}
                        target="-blank"
                        rel="noopener noreferrer"
                        title={key}
                        className="social-icon"
                    >
                        {resumeData.socials[key].icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Profile;
