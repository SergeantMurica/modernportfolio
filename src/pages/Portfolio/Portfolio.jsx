import React, {useState} from 'react'
import './Portfolio.css'
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid2, Grow, Tab, Tabs} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail.jsx";

const Portfolio = () => {

    const [tabValue, setTabValue] = useState("All");


    return (
        <div>
            <Container className="resume-container">
                <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>

                    {/*Title*/}
                    <Grid2 item size={12}>
                        <div  className="heading-text">
                            <span></span>
                            Portfolio
                        </div>
                    </Grid2>


                    {/*Tabs*/}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5 }}>
                            <Grid2 item size={12}>
                                <Tabs value={tabValue}
                                      indicatorColor="white"
                                      className="custom-tabs"
                                      onChange={(event, newValue) => setTabValue(newValue)}
                                >
                                    <Tab label="All" value="All" className={tabValue === "All" ? "custom-tab-active" : "custom-tab"}/>

                                    {[...new Set(resumeData.portfolio.map((item) => item.tag))].map((tag) => (
                                        <Tab
                                            key={tag}
                                            label={tag}
                                            value={tag}
                                            className={tabValue === "All" ? "custom-tab-active" : "custom-tab"}
                                        />
                                    ))}

                                </Tabs>
                            </Grid2>
                        </Grid2>
                    </Grid2>


                    {/*Projects*/}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={2}>
                            <div >
                                {resumeData.portfolio.map((project) => (
                                    <>
                                        {tabValue === project.tag || tabValue === "All" ? (
                                        <Grid2 item>
                                            <Grow in timeout={1000}>
                                                <Card className="project-card" onClick={() => setTabValue("All")}>
                                                    <CardActionArea>
                                                        <CardMedia className="project-card-media"
                                                                   image={project.webimg ?
                                                                       <ProjectThumbnail url={project.webimg}/> :
                                                                       <img src={project.img} alt="" className="img-fluid"/>
                                                                   }
                                                                   title={project.title} />
                                                        <CardContent>
                                                            {project.webimg ? (
                                                                <>
                                                                    <div>
                                                                        <ProjectThumbnail url={project.webimg}/>
                                                                        <span>{project.title}</span>
                                                                    </div>

                                                                </>
                                                            ):(
                                                                <div className="img-thumbnail">
                                                                    <img src={project.img} alt="" className="img-fluid"/>
                                                                    <span>{project.title}</span>
                                                                </div>
                                                            )}
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grow>
                                        </Grid2>
                                        ) : null}
                                    </>
                                ))}
                            </div>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Portfolio;