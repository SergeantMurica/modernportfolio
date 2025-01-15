import React, { useState } from "react";
import {
    TimelineItem,
    TimelineContent,
    Timeline,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot
} from "@mui/lab";
import "./BasicTimeline.css"


export const BasicTimelineSeparator = () => {

    return (
        <TimelineSeparator className={'timeline-separator'}>
            <TimelineDot className={'timeline-dot'}></TimelineDot>
            <TimelineConnector/>
        </TimelineSeparator>
    )
}
export const BasicNolineSeparator = () => {

    return (
        <TimelineSeparator className={'timeline-separator'}>
            <TimelineDot className={'timeline-dot'}></TimelineDot>
        </TimelineSeparator>
    )
}

// eslint-disable-next-line react/prop-types
export const BasicTimelineItem = ({title, text, link, last}) => {

    return (
        <TimelineItem>
            {last ? <BasicNolineSeparator/> : <BasicTimelineSeparator />}
            <TimelineContent className="timeline-content">
                {link ? (
                    <div className="timeline-item-text">
                      <span>
                          {title}:
                      </span>
                        <a href={link} target="-blank">
                            {text}
                        </a>
                    </div>) : (
                    <div className="timeline-item-text">
                        <span>{title}:</span> {text}
                    </div>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}

// eslint-disable-next-line react/prop-types
const BasicTimeline = ({title, icon, children}) => {
    return (
        <div>
            <Timeline className='timeline'>
                {/* Item Header */}
                <TimelineItem className='timeline-first'>
                    <TimelineSeparator>
                        <TimelineDot className='timeline-dot-header'>{icon}</TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='timeline-header'>
                            {title}
                        </div>
                    </TimelineContent>
                </TimelineItem>
                {children}
            </Timeline>
        </div>
    )
}


export default BasicTimeline;