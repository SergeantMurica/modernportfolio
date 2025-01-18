import React, {useState} from 'react'
import './Portfolio.css'
import {
    Card, CardActionArea, CardContent,
    CardMedia, Container, DialogTitle,
    Dialog, DialogActions, DialogContent,
    Grid2, Grow
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
                        <Grid2 container spacing={1}>
                            <Grid2 item size={12}>
                                <Grid2 item size={12}>
                                    <div className="tabs-wrapper">
                                        <div
                                            className={`custom-tab ${tabValue === "All" ? "custom-tab-active" : "custom-tab-inactive"}`}
                                            onClick={() => setTabValue("All")}
                                        >
                                            All
                                        </div>
                                        {[...new Set(resumeData.portfolio.map((item) => item.tag))].map((tag) => (
                                            <div
                                                key={tag}
                                                className={`custom-tab ${tabValue === tag ? "custom-tab-active" : "custom-tab-inactive"}`}
                                                onClick={() => setTabValue(tag)}
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </Grid2>

                            </Grid2>
                        </Grid2>
                    </Grid2>


                    {/*Projects*/}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={1}>
                            {resumeData.portfolio.map((project) => (
                                <>
                                    {tabValue === project.tag || tabValue === "All" ? (
                                        <Grid2 item size={{xs: 12, sm: 6, md: 4, lg: 4}} className="project-card">
                                            <Grow in timeout={1000}>
                                                <Card onClick={() => setProjectDialog(project)}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            className="project-card-media"
                                                            image={project.image}
                                                            title={project.title}
                                                        />

                                                        <CardContent className="project-card-content">
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
            <Dialog open={projectDialog}
                    onClose={() => setProjectDialog(false)}
                    className="dialog-card"
                    maxWidth="lg"
                    fullWidth
            >
                <DialogTitle onClose={() => setProjectDialog(false)} className="dialog-title">
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt={projectDialog.title} className="dialog-img"/>
                <DialogContent className="dialog-content">
                    <span className="dialog-description">{projectDialog.description}</span>
                </DialogContent>
                <DialogActions className="dialog-actions">
                    <div>
                        <a href={projectDialog.url} target="_blank" className="dialog-link">
                            Go to < ExitToAppIcon/>
                        </a>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Portfolio;