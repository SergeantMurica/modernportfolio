import React, { useState } from "react";
import {
    BasicNolineSeparator,
    BasicTimelineSeparator,
} from "./BasicTimeline.jsx";
import { TimelineContent, TimelineItem } from "@mui/lab";

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
            {last ? <BasicNolineSeparator /> : <BasicTimelineSeparator />}
            <TimelineContent>
                {!img &&
                    <div>
                        <div className="title-text">{title}</div>
                        <div className="resume-company">{company}</div>
                        <div className="resume-date">{date}</div>
                        <div className="resume-text">{text}</div>
                    </div>
                }
                {img && (
                    <>
                    <div
                            className="cert-thumbnail-container"
                            onClick={() => showModal(img)} // Pass the img source explicitly
                        >
                            <img className="cert-thumbnails" src={img} alt={title} />
                        <div className="cert-thumbnail-overlay">
                            <div className="cert-title">{title}</div>
                            <br/>
                            <div className="cert-company">Earned from {company}</div>
                            <br/>
                            <div className="cert-company">Click To View</div>
                        </div>
                    </div>
                        {isModalVisible && (
                            <div className="modal">
                                <div className="modal-backdrop" onClick={hideModal}></div>
                                <div className="modal-content">
                                    <span id="modal-close-button" onClick={hideModal}>
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