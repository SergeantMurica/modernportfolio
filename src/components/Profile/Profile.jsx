import React from 'react'
import {Typography} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from '../Button/Button.jsx'

import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/CustomTimeline.jsx';
import resumeData from "../../utils/resumeData.jsx";

import './Profile.css'


const CustomTimelineItem = ({title, text, link}) => {
  return (
      <TimelineItem>
          <CustomTimelineSeparator/>
          <TimelineContent className="timeline_content">
              {link ? (
                  <Typography className="timeline_item_text">
                      <span>
                          {title}:
                      </span>
                      <a href={link} target="_blank">
                          {text}
                      </a>
                  </Typography>) : (
                  <Typography className="timeline_item_text">
                      <span>{title}:</span> {text}
                  </Typography>
              )}
          </TimelineContent>
      </TimelineItem>
  )
}

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
                    <CustomTimelineItem title={'Current Job'} text={resumeData.jobTitle} />
                    <CustomTimelineItem title={'Birthday'} text={resumeData.birthday} />
                    <CustomTimelineItem title={'Email'} text={resumeData.email} />

                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].url} />
                    ))}
                </CustomTimeline>
                <div className="resume_btn">
                    <CustomButton text={'Download CV'} icon={<DownloadIcon/>}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;