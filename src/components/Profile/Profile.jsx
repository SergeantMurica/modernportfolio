import React from 'react'
import {Typography} from "@mui/material";
import CustomTimeline from '../Timeline/CustomTimeline.jsx';

import './Profile.css'

const Portfolio = () => {
    return (
        <div className="profile_container">
            <div className="profile_name">
                <Typography className="name">Alex</Typography>
                <Typography className="title">Alex</Typography>
            </div>
            <figure className="profile_image">
                <img src={'./src/assets/images/ProfileImg.jpg'} alt=""/>
            </figure>
            <div className="profile_description">
                <CustomTimeline/>
                <br/>
                <button>My Button</button>
            </div>
        </div>
    )
}

export default Portfolio;