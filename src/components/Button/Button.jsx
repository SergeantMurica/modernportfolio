import React from 'react';
import {Button, Typography} from "@mui/material";
import './Button.css'

const CustomButton = ({text, icon, link}) => {
    return (
        <Button className='custom_btn' endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}>
            {link ? (
                <Typography className="btn_text">
                    <a href={link} target="_blank">
                        {text}
                    </a>
                </Typography>) : (
                <Typography className="btn_text">
                    {text}
                </Typography>
            )}
        </Button>
    )

}

export default CustomButton;