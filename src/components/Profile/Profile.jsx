import React from 'react';
import { Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import CustomButton from '../Button/Button.jsx';
import CustomTimeline, { CustomTimelineItem } from '../Timeline/CustomTimeline.jsx';
import resumeData from '../../utils/resumeData.jsx';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile_container">
            <div className="profile_header">
                <Typography variant="h4" className="profile_name">
                    {resumeData.name}
                </Typography>
                <Typography variant="subtitle1" className="profile_title">
                    {resumeData.title}
                </Typography>
            </div>
            <figure className="profile_image">
                <img src={'../../src/assets/images/ProfileImg.jpg'} alt="Profile"/>
            </figure>
            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title="Current Job" text={resumeData.jobTitle}/>
                    <CustomTimelineItem title="Birthday" text={resumeData.birthday}/>
                    <CustomTimelineItem title="Email" text={resumeData.email} last={true}/>
                </CustomTimeline>
                <div className="resume_btn">
                    <CustomButton text="Download CV" icon={<DownloadIcon/>}/>
                </div>
            </div>

            <div className="socials">
                {Object.keys(resumeData.socials).map((key) => (
                    <a
                        key={key}
                        href={resumeData.socials[key].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={key}
                        className="social_icon"
                    >
                        {resumeData.socials[key].icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Profile;
