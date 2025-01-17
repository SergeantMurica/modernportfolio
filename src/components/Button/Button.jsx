import {Button} from "@mui/material";
import './Button.css'

// eslint-disable-next-line react/prop-types
const CustomButton = ({text, icon, link, type, onClick}) => {
    return (
        <div className='custom-btn'>
            <Button type={type}
                    endIcon={icon ?
                        <div className='btn-icon-container'>
                            {icon}
                        </div> : null}
                    onClick={onClick}
            >
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