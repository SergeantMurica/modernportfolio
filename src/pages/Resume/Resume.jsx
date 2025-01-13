import React from 'react'
import resumeData from "../../utils/resumeData.jsx";
import CustomTimeline, {CustomResumeItem} from "../../components/Timeline/CustomTimeline.jsx";

import {Container, Grid2, Typography} from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import './Resume.css'

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
                            <CustomTimeline title={resumeData.resume.worktitle} icon={<WorkHistoryIcon/>}>
                                    {Object.keys(resumeData.resume.work).map((key, index) => (
                                        <div key={index} className="work_item">
                                            <CustomResumeItem
                                                title={resumeData.resume.work[key].title}
                                                company={resumeData.resume.work[key].company}
                                                date={resumeData.resume.work[key].date}
                                                text={resumeData.resume.work[key].description}
                                                last={resumeData.resume.work[key].last}
                                            />
                                        </div>
                                    ))}
                            </CustomTimeline>
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                        <Typography gutterBottom className="resume_heading_text">
                            <CustomTimeline title={resumeData.resume.worktitle} icon={<WorkHistoryIcon/>}>
                                {Object.keys(resumeData.resume.work).map((key, index) => (
                                    <div key={index} className="work_item">
                                        <CustomResumeItem
                                            title={resumeData.resume.work[key].title}
                                            company={resumeData.resume.work[key].company}
                                            date={resumeData.resume.work[key].date}
                                            text={resumeData.resume.work[key].description}
                                            last={resumeData.resume.work[key].last}
                                        />
                                    </div>
                                ))}
                            </CustomTimeline>
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5}}>
                    <Grid2 item size={{xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.resume.edutitle}
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5}}>
                    <Grid2 item size={{xs: 12, sm: 12, md: 12, lg: 4}}>
                        <Typography gutterBottom className="heading_text">
                            {resumeData.resume.certtitle}
                        </Typography>
                    </Grid2>
                    <Grid2 item size='grow'>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Resume;