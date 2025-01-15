import React from 'react'
import {Container, Grid2} from "@mui/material";




import './Contact.css'
import resumeData from "../../utils/resumeData.jsx";





const Contact = () => {
    return (
        <div>
            <Container fluid className="contact-container">
                {/*Contact Page*/}
                <Grid2 container spacing={{xs: 1.5, sm: 3, md: 4, lg: 5}}>
                    {/*Contact Form*/}
                    <Grid2 item size={{xs: 12, sm: 12, md: 7, lg: 7}}>
                        <Grid2 container>
                            <Grid2 item>
                                <div className="heading-text">
                                    <span></span>
                                    Contact Form
                                </div>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    {/*Contact Info*/}
                    <Grid2 item size={{xs: 12, sm: 12, md: 5, lg: 5}}>
                        <Grid2 container>
                            <Grid2 item>
                                <div className="heading-text">
                                    <span></span>
                                    Contact Information
                                </div>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}
export default Contact;