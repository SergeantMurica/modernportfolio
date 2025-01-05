import React from 'react'
import {Typography} from "@mui/material";

const Portfolio = () => {
    return (
        <div className="profile_container_shadow">
            <div className="profile_name">
                <Typography className="name">Alex</Typography>
                <Typography className="title">Alex</Typography>
            </div>
            <figure className="profile_picture">
                <img src="" alt="" />
            </figure>
            <div className="profile_description">
                Insert Timeline
                <br/>
                <button>My Button</button>
            </div>
        </div>
    )
}
export default Portfolio;