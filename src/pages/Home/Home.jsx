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
                            {resumeData.resume.aboutMe.title}
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                        <Typography color="textSecondary" gutterBottom className="body_text">
                            {resumeData.resume.aboutMe.text}
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container columns={2} spacing={{xs: 1.5, sm: 3, md: 4, lg: 5 }}>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.resume.services.title}
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                            <div className="service_container">
                                {Object.keys(resumeData.resume.services.thumbnail).map((key, index) => (
                                    <div key={index} className="service_thumbnails">
                                        <Typography color="textSecondary" gutterBottom className="thumbnail_icon">
                                            {resumeData.resume.services.thumbnail[key].icon}
                                        </Typography>
                                        <Typography fontSize={15} className="thumbnail_title">
                                            {resumeData.resume.services.thumbnail[key].title}
                                        </Typography>
                                        <Typography fontSize={10} className="thumbnail_text">
                                            {resumeData.resume.services.thumbnail[key].text}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                    </Grid2>
                </Grid2>
                <Grid2 container columns={2} spacing={{xs: 1.5, sm: 3, md: 4, lg: 5}}>
                    <Grid2 item size={{xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.resume.skills.title}
                        </Typography>
                    </Grid2>
                    <Grid2 container spacing={{xs: 1.5, sm: 3, md: 4, lg: 5}}>
                        <Grid2 item size='grow'>
                            <Typography gutterBottom className="heading_text">
                                Coding Skills
                            </Typography>
                            <div className="skill_container">
                                {Object.keys(resumeData.resume.skills.coding).map((key, index) => (
                                    <div key={index} className="certs">
                                        <Typography gutterBottom className="skill_title">
                                            {resumeData.resume.skills.coding[key].title}
                                        </Typography>
                                        <Typography color="textSecondary" className="skill_time">
                                            {resumeData.resume.skills.coding[key].time}
                                        </Typography>
                                        <Typography color="textSecondary" className="skill_certs">
                                            {resumeData.resume.skills.coding[key].certs}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </Grid2>
                        <Grid2 item size='grow'>
                            <Typography gutterBottom className="heading_text">
                                Other Skills
                            </Typography>
                            <div className="skill_container">
                                {Object.keys(resumeData.resume.skills.other).map((key, index) => (
                                    <div key={index} className="certs">
                                        <Typography gutterBottom className="skill_title">
                                            {resumeData.resume.skills.other[key].title}
                                        </Typography>
                                        <Typography color="textSecondary" className="skill_time">
                                            {resumeData.resume.skills.other[key].time}
                                        </Typography>
                                        <Typography color="textSecondary" className="skill_certs">
                                            {resumeData.resume.skills.other[key].certs}
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