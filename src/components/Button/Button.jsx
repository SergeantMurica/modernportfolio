import {Button} from "@mui/material";
import './Button.css'

// eslint-disable-next-line react/prop-types
const CustomButton = ({text, icon, link}) => {
    return (
        <div className='custom-btn'>
            <Button endIcon={icon ?
                <div className='btn-icon-container'>
                    {icon}
                </div> : null}>
                {link ? (
                    <div className="btn-text">
                        <a href={link} target="-blank">
                            {text}
                        </a>
                    </div>) : (
                    <div className="btn-text">
                        {text}
                    </div>
                )}
            </Button>
        </div>
    )

}

export default CustomButton;