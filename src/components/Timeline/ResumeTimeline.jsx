import React, { useState } from "react";
import {
    CustomNolineSeparator,
    CustomTimelineSeparator,
} from "./BasicTimeline.jsx";
import { TimelineContent, TimelineItem } from "@mui/lab";
import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ResumeTimeline = ({ title, company, date, text, img, last }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalImgSrc, setModalImgSrc] = useState("");

    const showModal = (src) => {
        setIsModalVisible(true);
        setModalImgSrc(src);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setModalImgSrc("");
    };

    return (
        <TimelineItem>
            {last ? <CustomNolineSeparator /> : <CustomTimelineSeparator />}
            <TimelineContent>
                {!img && <Typography className="resume_title">{title}</Typography>}
                {!img && <Typography className="resume_company">{company}</Typography>}
                <Typography className="resume_date" variant="caption">
                    {date}
                </Typography>
                <Typography className="resume_text" variant="body2">
                    {text}
                </Typography>
                {img && (
                    <>
                        <div
                            onClick={() => showModal(img)} // Pass the img source explicitly
                        >
                            <img className="cert_thumbnails" src={img} alt={title} />
                            <div className="cert_thumbnail_overlay">
                                <Typography className="cert_title">{title}</Typography>
                                <Typography className="cert_company">{company}</Typography>
                            </div>
                        </div>
                        {isModalVisible && (
                            <div className="modal">
                                <div className="modal_backdrop" onClick={hideModal}></div>
                                <div className="modal_content">
                                    <span id="modal_close_button" onClick={hideModal}>
                                        &times;
                                    </span>
                                    <img alt={title} src={modalImgSrc} />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </TimelineContent>
        </TimelineItem>
    );
};

export default ResumeTimeline;