import React from 'react'
import './Home.css'
import {Container, Grid2, Typography} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";

const Homepage = () => {
    return (
        <div>
            <Container className="home_container">
                <Grid2 container columns={2} spacing={{xs: 1.5, sm: 3, md: 4, lg: 5 }}>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.home.aboutMe.title}
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                        <Typography color="textSecondary" gutterBottom className="body_text">
                            {resumeData.home.aboutMe.start}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom className="body_text">
                            {resumeData.home.aboutMe.mid}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom className="body_text">
                            {resumeData.home.aboutMe.end}
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container columns={2} spacing={{xs: 1.5, sm: 3, md: 4, lg: 5 }}>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.home.services.title}
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                            <div className="service_container">
                                {Object.keys(resumeData.home.services.thumbnail).map((key, index) => (
                                    <div key={index} className="service_thumbnails">
                                        <Typography color="textSecondary" gutterBottom className="thumbnail_icon">
                                            {resumeData.home.services.thumbnail[key].icon}
                                        </Typography>
                                        <Typography fontSize={15} className="thumbnail_title">
                                            {resumeData.home.services.thumbnail[key].title}
                                        </Typography>
                                        <Typography fontSize={10} className="thumbnail_text">
                                            {resumeData.home.services.thumbnail[key].text}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                    </Grid2>
                </Grid2>
                <Grid2 container columns={2} spacing={{xs: 1.5, sm: 3, md: 4, lg: 5}}>
                    <Grid2 item size={{xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.home.skills.title}
                        </Typography>
                    </Grid2>
                    <Grid2 container spacing={{xs: 1.5, sm: 3, md: 4, lg: 5}}>
                        <Grid2 item size='auto'>
                            <Typography gutterBottom className="heading_text">
                                Coding Skills
                            </Typography>
                            <div className="skill_container">
                                {Object.keys(resumeData.home.skills.coding).map((key, index) => (
                                    <div key={index} className="skills">
                                        <Typography gutterBottom className="skill_title">
                                            {resumeData.home.skills.coding[key].title}
                                        </Typography>
                                        <Typography color="textSecondary" className="skill_time">
                                            {resumeData.home.skills.coding[key].time}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </Grid2>
                        <Grid2 item size='auto'>
                            <Typography gutterBottom className="heading_text">
                                Other Skills
                            </Typography>
                            <div className="skill_container other">
                                {Object.keys(resumeData.home.skills.other).map((key, index) => (
                                    <div key={index} className="skills">
                                        <Typography gutterBottom className="skill_title">
                                            {resumeData.home.skills.other[key].title}
                                        </Typography>
                                        <Typography color="textSecondary" className="skill_time">
                                            {resumeData.home.skills.other[key].time}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Homepage;