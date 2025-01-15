import React from 'react'
import resumeData from "../../utils/resumeData.jsx";
import BasicTimeline from "../../components/Timeline/BasicTimeline.jsx";
import ResumeTimeline from "../../components/Timeline/ResumeTimeline.jsx";

import {Container, Grid2} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import './Resume.css'
import './CertificateThumbnail.css'

const Resume = () => {
    return (
        <div>
            <Container className="resume-container">
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
                        <div  className="heading-text">
                            <span></span>
                            Resume
                        </div>
                    </Grid2>
                    <Grid2 item xs={12} sm={12} md={6}>
                        <Grid2 container className="resume" spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
                            <Grid2 item size={{ xs: 12, md: 6}}>
                                <div >
                                    <BasicTimeline title={resumeData.resume.worktitle} icon={<WorkIcon/>}>
                                        {Object.keys(resumeData.resume.work).map((key, index) => (
                                            <div key={index} className="resume-item">
                                                <ResumeTimeline
                                                    title={resumeData.resume.work[key].title}
                                                    company={resumeData.resume.work[key].company}
                                                    date={resumeData.resume.work[key].date}
                                                    text={resumeData.resume.work[key].description}
                                                    last={resumeData.resume.work[key].last}
                                                />
                                            </div>
                                        ))}
                                    </BasicTimeline>
                                </div>
                            </Grid2>
                            <Grid2 item size={{ xs: 12, md: 6}}>
                                <div >
                                    <BasicTimeline title={resumeData.resume.edutitle} icon={<SchoolIcon/>}>
                                        {Object.keys(resumeData.resume.education).map((key, index) => (
                                            <div key={index} className="resume-item">
                                                <ResumeTimeline
                                                    title={resumeData.resume.education[key].major}
                                                    company={resumeData.resume.education[key].school}
                                                    date={resumeData.resume.education[key].date}
                                                    text={resumeData.resume.education[key].minor}
                                                    last={resumeData.resume.education[key].last}
                                                />
                                            </div>
                                        ))}
                                    </BasicTimeline>
                                </div>
                                <div >
                                    <BasicTimeline title={resumeData.resume.certtitle} icon={<LightbulbIcon/>}>
                                        {Object.keys(resumeData.resume.certs).map((key, index) => (
                                            <div key={index} className="resume-item">
                                                <ResumeTimeline
                                                    title={resumeData.resume.certs[key].title}
                                                    company={resumeData.resume.certs[key].company}
                                                    img={resumeData.resume.certs[key].img}
                                                    last={resumeData.resume.certs[key].last}
                                                />
                                            </div>
                                        ))}
                                    </BasicTimeline>
                                </div>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Resume;