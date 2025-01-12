import React from 'react';
import {Button, Typography} from "@mui/material";
import './Button.css'

const CustomButton = ({text, icon, link}) => {
    return (
        <div className='custom_btn'>
            <Button endIcon={icon ?
                <div className='btn_icon_container'>
                    {icon}
                </div> : null}>
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
        </div>
    )

}

export default CustomButton;