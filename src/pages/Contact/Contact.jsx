import React from 'react'
import {Container, Grid2, TextField} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";
import CustomButton from "../../components/Button/Button.jsx";




import './Contact.css'





const Contact = () => {
    return (
        <div>
            <Container fluid className="page-container">
                {/*Contact Page*/}
                <Grid2 container spacing={5}>


                    {/*Contact Form*/}
                    <Grid2 item size={{xs: 12, md: 7}}>
                        <Grid2 container>
                            <Grid2 item>
                                <div className="heading-text">
                                    <span></span>
                                    Contact Form
                                </div>
                            </Grid2>
                            <Grid2 item size={{xs: 12}}>
                                <Grid2 container spacing={3}>
                                    <Grid2 item size={{xs: 6}}>
                                        <TextField fullWidth={true} label="Name" name="name" />
                                    </Grid2>
                                    <Grid2 item size={{xs: 6}}>
                                        <TextField fullWidth={true} label="Email" name="email" />
                                    </Grid2>
                                    <Grid2 item size={{xs: 12}}>
                                        <TextField fullWidth={true} multiline={true} rows={{xs: 4, md: 12}} label="Message" name="message" />
                                    </Grid2>
                                    <Grid2 item>
                                        <CustomButton text="Submit"/>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>


                    {/*Contact Info*/}
                    <Grid2 item size={{xs: 12, md: 5}}>
                        <Grid2 container>
                            <Grid2 item>
                                <div className="heading-text">
                                    <span></span>
                                    Contact Information
                                </div>
                                <Grid2 item size={{xs: 12}}>
                                    <Grid2 container spacing={3}>
                                        <Grid2 item size={{xs: 12}} className="contact-information">
                                            <span>Email: </span>
                                            {resumeData.email}
                                        </Grid2>
                                        <Grid2 item size={{xs: 12}} className="contact-socials">
                                            {resumeData.contact.map(element => (
                                                <a
                                                    key={element}
                                                    href={element.url}
                                                    target="-blank"
                                                    rel="noopener noreferrer"
                                                    className="social-icon"
                                                >
                                                    {element.icon}
                                                </a>
                                            ))}
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>


                </Grid2>
            </Container>
        </div>
    )
}
export default Contact;