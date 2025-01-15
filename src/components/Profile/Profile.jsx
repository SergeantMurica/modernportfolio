import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import CustomButton from '../Button/Button.jsx';
import BasicTimeline, { BasicTimelineItem } from '../Timeline/BasicTimeline.jsx';
import resumeData from '../../utils/resumeData.jsx';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-name">
                    {resumeData.name}
                </div>
                <div className="profile-title">
                    {resumeData.title}
                </div>
            </div>
            <figure className="profile-image">
                <img src={'/assets/images/profileImage.png'} alt="Profile Image"/>
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
