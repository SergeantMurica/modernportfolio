import React, {useState} from 'react';
import axios from "axios";
import {Grid2, TextField} from "@mui/material";
import CustomButton from "../Button/Button.jsx";




const EmailForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();


        {/*  ADD YOUR OWN EMAIL.JS   */}
        const serviceID = 'YourEmailJSServiceId';
        const templateID = 'YourEmailJSTemplate';
        const publicKey = 'YourEmailJSKey'

        const data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: "Your Name",
                message: message,
            }
        }

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="email-form">
            <Grid2 container spacing={3}>
                <Grid2 item size={{xs: 12, md: 6}}>
                    <TextField type="text"
                               name="name"
                               placeholder="Your Name"
                               className="name-input"
                               onChange={(e) => setName(e.target.value)}/>
                </Grid2>
                <Grid2 item size={{xs: 12, md: 6}}>
                    <TextField type="email"
                               name="email"
                               placeholder="Your Email"
                               className="email-input"
                               onChange={(e) => setEmail(e.target.value)}/>
                </Grid2>
                <Grid2 item size={{xs: 12}}>
                    <TextField multiline={true}
                               rows={8}
                               name="message"
                               placeholder="Your Message"
                               className="message-input"
                               onChange={(e) => setMessage(e.target.value)}/>
                </Grid2>
                <Grid2 item>
                    <CustomButton type="submit" text="Send"/>
                </Grid2>
            </Grid2>
        </form>
    )
};


export default EmailForm;