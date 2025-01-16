import React from 'react'
import './Home.css'
import {Container, Grid2} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";
import Ticker from "../../components/Ticker/Ticker.jsx";
import {TimelineDot} from "@mui/lab";

const Homepage = () => {
    return (
        <Container className="page-container">


            {/*About Section*/}
            <Grid2 container columns={2} spacing={{xs: 1.5, sm: 3, md: 4, lg: 5}} >
                <Grid2 item size={{xs: 12, sm: 12, md: 12, lg: 4}}>
                    <div className="heading-text">
                        <span></span>
                        {resumeData.home.aboutMe.title}
                    </div>
                </Grid2>
                <Grid2 item size='grow'>
                    <div className="body-text">
                        {resumeData.home.aboutMe.start}
                    </div>
                    <div className="body-text">
                        {resumeData.home.aboutMe.mid}
                    </div>
                    <div className="body-text">
                        {resumeData.home.aboutMe.end}
                    </div>
                </Grid2>
            </Grid2>


            {/*Services Section*/}
            <Grid2 container>
                <Grid2 item size={{xs: 12, sm: 12, md: 12, lg: 4}}>
                    <div className="heading-text">
                        <span></span>
                        {resumeData.home.services.title}
                    </div>
                </Grid2>
                <Grid2 size={{xs: 12}}>
                    <Grid2 container justifyContent='space-around' spacing={1}>
                        {Object.keys(resumeData.home.services.thumbnail).map((key, index) => (
                            <Grid2 item
                                   size={{xs: 12, sm: 5, md: 3, lg: 3}}
                                   key={index}
                                   className="service-thumbnails"
                            >
                                <div className="service-icon">
                                    {resumeData.home.services.thumbnail[key].icon}
                                </div>
                                <div className="service-title">
                                    {resumeData.home.services.thumbnail[key].title}
                                </div>
                                <div className="service-description">
                                    {resumeData.home.services.thumbnail[key].text}
                                </div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>

            {/*Ticker Tape*/}
            <Grid2 container>
                <Grid2 item size='grow'>
                    <Ticker/>
                </Grid2>
            </Grid2>

            {/*Skill Section*/}
            <Grid2 container>
                <Grid2 item size={{xs: 12}}>
                    <div className="heading-text">
                        <span></span>
                        {resumeData.home.skills.title}
                    </div>
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                    <Grid2 container justifyContent='space-around' spacing={1}>
                        {resumeData.home.skills.groups.map(skill => (
                            // eslint-disable-next-line react/jsx-key
                            <Grid2
                                item
                                size={{xs: 12, sm: 5, md: 3, lg: 3}}
                                className="skill-thumbnails"
                            >
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <div className="skill-title">
                                    {skill.title}
                                </div>
                                {skill.description.map((element) => (
                                    <div key={element} className="skill-description">
                                        <TimelineDot variant={"outlined"} className='skill-dot'/>
                                        <div className="skill-description">
                                            {element}
                                        </div>
                                    </div>
                                ))}
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    )
}
export default Homepage;