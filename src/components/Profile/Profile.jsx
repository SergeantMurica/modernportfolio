import React from 'react'
import {Typography} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import CustomButton from '../Button/Button.jsx'

import CustomTimeline, {CustomTimelineItem} from '../Timeline/CustomTimeline.jsx';
import resumeData from "../../utils/resumeData.jsx";

import './Profile.css'



const Profile = () => {
    return (
        <div className="profile_container">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={'./src/assets/images/ProfileImg.jpg'} alt=""/>
            </figure>
            <div className="profile_information">
                <CustomTimeline  icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title={'Current Job'} text={resumeData.jobTitle} last={false} />
                    <CustomTimelineItem title={'Birthday'} text={resumeData.birthday} last={false} />
                    <CustomTimelineItem title={'Email'} text={resumeData.email} last={true} />

                    {/*Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem key={key} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].url} />
                    ))*/}
                </CustomTimeline>
                <div className="resume_btn">
                    <CustomButton text={'Download CV'} icon={<DownloadIcon/>}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;