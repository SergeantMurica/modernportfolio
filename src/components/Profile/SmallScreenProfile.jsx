import React from 'react';
import Profile from "./Profile.jsx";
import CustomButton from '../Button/Button.jsx';
import BasicTimeline, { BasicTimelineItem } from '../Timeline/BasicTimeline.jsx';
import useIsMobile from "../../hooks/IsMobile.jsx";
import resumeData from '../../utils/resumeData.jsx';
import {Container, Grid2} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import './SmallScreenProfile.css';

const SmallScreenProfile = () => {

    const isMobile = useIsMobile(768);


    return (
        <div>
            {!isMobile ? (
                <Container className="page-container">
                    {/*Contact Page*/}
                    <Grid2 container spacing={5}>


                        {/*Me*/}
                        <Grid2 item size={4}>
                            <Grid2 container>
                                <Grid2 item className="mobile-profile-header">
                                    <div className="mobile-profile-name">
                                        <span></span>
                                        {resumeData.name}
                                    </div>
                                    <div className="mobile-profile-title">
                                        {resumeData.title}
                                    </div>
                                    <figure className="mobile-profile-image">
                                        <img src={'/assets/images/profileImage.jpg'} alt="Profile Image"/>
                                    </figure>
                                </Grid2>
                            </Grid2>
                        </Grid2>


                        {/*Timeline*/}
                        <Grid2 item size={4}>
                            <Grid2 container>
                                <Grid2 item className="mobile-profile-header">
                                    <div className="mobile-profile-information">
                                        <BasicTimeline icon={<PersonOutlineIcon/>}>
                                            <BasicTimelineItem title="Current Job" text={resumeData.jobTitle}/>
                                            <BasicTimelineItem title="Birthday" text={resumeData.birthday}/>
                                            <BasicTimelineItem title="Email" text={resumeData.email} last={true}/>
                                        </BasicTimeline>
                                    </div>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                        {/*Buttons*/}
                        <Grid2 item size={4}>
                            <Grid2 container spacing={10}>
                                <Grid2 item size={12} className="mobile-socials">
                                    {Object.keys(resumeData.socials).map((key) => (
                                        <a
                                            key={key}
                                            href={resumeData.socials[key].url}
                                            target="-blank"
                                            rel="noopener noreferrer"
                                            title={key}
                                            className="mobile-social-icon"
                                        >
                                            {resumeData.socials[key].icon}
                                        </a>
                                    ))}
                                </Grid2>
                                <Grid2 item size={12}>
                                    <div className="mobile-resume-btn">
                                        <CustomButton text="Download CV" icon={<DownloadIcon/>}/>
                                    </div>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>


                </Container>
            ): (<Profile />)}
        </div>
    )
        ;
};

export default SmallScreenProfile;
