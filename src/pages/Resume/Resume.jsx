import React from 'react'
import resumeData from "../../utils/resumeData.jsx";
import BasicTimeline from "../../components/Timeline/BasicTimeline.jsx";
import ResumeTimeline from "../../components/Timeline/ResumeTimeline.jsx";

import {Container, Grid2, Typography} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import './Resume.css'
import './CertificateThumbnail.css'

const Resume = () => {
    return (
        <div>
            <Container className="resume_container">
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">Resume</Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
                    <Grid2 item size='grow'>
                        <Typography gutterBottom className="resume_heading_text">
                            <BasicTimeline title={resumeData.resume.worktitle} icon={<WorkIcon/>}>
                                    {Object.keys(resumeData.resume.work).map((key, index) => (
                                        <div key={index} className="work_item">
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
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                        <Typography gutterBottom className="resume_heading_text">
                            <BasicTimeline title={resumeData.resume.edutitle} icon={<SchoolIcon/>}>
                                {Object.keys(resumeData.resume.education).map((key, index) => (
                                    <div key={index} className="work_item">
                                        <ResumeTimeline
                                            title={resumeData.resume.education[key].title}
                                            company={resumeData.resume.education[key].school}
                                            date={resumeData.resume.education[key].date}
                                            text={resumeData.resume.education[key].minor}
                                            last={resumeData.resume.education[key].last}
                                        />
                                    </div>
                                ))}
                            </BasicTimeline>
                        </Typography>
                        <Typography gutterBottom className="resume_heading_text">
                            <BasicTimeline title={resumeData.resume.certtitle} icon={<LightbulbIcon/>}>
                                {Object.keys(resumeData.resume.mainCerts).map((key, index) => (
                                    <div key={index} className="work_item">
                                        <ResumeTimeline
                                            title={resumeData.resume.mainCerts[key].title}
                                            company={resumeData.resume.mainCerts[key].company}
                                            img={resumeData.resume.mainCerts[key].img}
                                            last={resumeData.resume.mainCerts[key].last}
                                        />
                                    </div>
                                ))}
                            </BasicTimeline>
                        </Typography>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Resume;