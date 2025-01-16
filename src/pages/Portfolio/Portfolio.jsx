import React, {useState} from 'react'
import './Portfolio.css'
import {Container, Grid2, Tab, Tabs} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";

const Portfolio = () => {

    const [tab, setTab] = useState("All");


    return (
        <div>
            <Container className="resume-container">
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
                    <Grid2 item size={12}>
                        <div  className="heading-text">
                            <span></span>
                            Portfolio
                        </div>
                    </Grid2>
                    <Grid2 item xs={12} sm={12} md={12}>
                        <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5 }}>
                            <Grid2 item size={12}>
                                <Tabs value={tab}
                                      indicatorColor="white"
                                      className="custom-tabs"
                                      onChange={(value) => setTab(value)}
                                >
                                    <Tab label="All" value="All" className={tab === "All" ? "custom-tab-active" : "custom-tab"}>
                                    </Tab>
                                </Tabs>
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5 }}>
                            <Grid2 item size={{ xs: 12, md: 4}}>
                                    <div >
                                        {resumeData.portfolio.map((project, index) => (
                                            <div key={index}>
                                                {project.webimg ?
                                                    <div>
                                                        <ProjectThumbnail url={project.webimg}/>
                                                        {project.title}
                                                    </div> :

                                                    <div className="img-thumbnail">
                                                        <img src={project.img} alt="" className="img-fluid"/>
                                                        {project.title}
                                                    </div>
                                                }

                                            </div>
                                        ))}
                                    </div>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Portfolio;