import React from "react";
import "./Ticker.css"; // Import the CSS for animations
import resumeData from "../../utils/resumeData.jsx";

const Ticker = () => {

    return (
        <div>
            <div className="ticker-container">
                <div className="ticker1">
                    {resumeData.languages1.map((language, index) => (
                        <div className="ticker-item" key={index}>
                            <img src={language.icon} alt={language.name} className="icon"/>
                            <span>{language.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ticker-container">
                <div className="ticker2">
                    {resumeData.languages2.map((language, index) => (
                        <div className="ticker-item" key={index}>
                            <img src={language.icon} alt={language.name} className="icon"/>
                            <span>{language.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Ticker;
