import React  from 'react'
import {Container, Grid2} from "@mui/material";
import resumeData from "../../utils/resumeData.jsx";
import EmailForm from "../../components/Email/Email.jsx";




import './Contact.css'



const Contact = () => {


    return (
        <div>
            <Container className="page-container">
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
                            <Grid2 item size={12}>
                                <EmailForm />
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
                                                    key={element.key}
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