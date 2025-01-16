import React, {useState} from 'react'
import './Portfolio.css'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Dialog, DialogActions, DialogContent,
    DialogTitle,
    Grid2,
    Grow,
    Tab,
    Tabs
} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Portfolio = () => {

    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);




    return (
        <div>
            <Container className="page-container">
                <Grid2 container>

                    {/*Title*/}
                    <Grid2 item size={12}>
                        <div  className="heading-text">
                            <span></span>
                            Portfolio
                        </div>
                    </Grid2>


                    {/*Tabs*/}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={2}>
                            <Grid2 item size={12}>
                                <Tabs value={tabValue}
                                      indicatorColor="white"
                                      className="custom-tabs"
                                      onChange={(event, newValue) => setTabValue(newValue)}
                                >
                                    <Tab label="All"
                                         value="All"
                                         className={tabValue === "All" ? "custom-tab-active" : "custom-tab-inactive"}
                                    />

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
                        <Grid2 container spacing={1}>
                            {resumeData.portfolio.map((project) => (
                                <>
                                    {tabValue === project.tag || tabValue === "All" ? (
                                        <Grid2 item className="project-card">
                                            <Grow in timeout={1000}>
                                                <Card onClick={() => setProjectDialog(project)}>
                                                    <CardActionArea>
                                                        <CardMedia className="project-card-media"
                                                                   image={project.img}
                                                                   title={project.title}
                                                        />

                                                        <CardContent>
                                                            <>
                                                                <div className="project-card-title">{project.title}</div>
                                                                <div className="project-card-caption">{project.caption}</div>
                                                            </>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grow>
                                        </Grid2>
                                    ) : null}
                                </>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>


            {/*Dialog Window*/}
            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className="dialog">
                <DialogTitle onClose={() => setProjectDialog(false)}>
                    {projectDialog.title}
                </DialogTitle>
                <DialogContent>
                    {projectDialog.description}
                        <img src={projectDialog.img} alt={projectDialog.title} />
                </DialogContent>
                <DialogActions>
                        <div>
                            <a href={projectDialog.url} target="_blank" className="dialog-link">
                                Go to < ExitToAppIcon />
                            </a>
                        </div>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Portfolio;