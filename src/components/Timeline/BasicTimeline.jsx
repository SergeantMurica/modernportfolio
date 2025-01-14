import React, { useState } from "react";
import {
    TimelineItem,
    TimelineContent,
    Timeline,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot
} from "@mui/lab";
import {Typography} from "@mui/material";
import "./CustomTimeline.css"


export const CustomTimelineSeparator = () => {

    return (
        <TimelineSeparator className={'timeline_separator'}>
            <TimelineDot className={'timeline_dot'}></TimelineDot>
            <TimelineConnector/>
        </TimelineSeparator>
    )
}
export const CustomNolineSeparator = () => {

    return (
        <TimelineSeparator className={'timeline_separator'}>
            <TimelineDot className={'timeline_dot'}></TimelineDot>
        </TimelineSeparator>
    )
}

// eslint-disable-next-line react/prop-types
export const CustomTimelineItem = ({title, text, link, last}) => {

    return (
        <TimelineItem>
            {last ? <CustomNolineSeparator/> : <CustomTimelineSeparator />}
            <TimelineContent className="timeline_content">
                {link ? (
                    <Typography className="timeline_item_text">
                      <span>
                          {title}:
                      </span>
                        <a href={link} target="_blank">
                            {text}
                        </a>
                    </Typography>) : (
                    <Typography className="timeline_item_text">
                        <span>{title}:</span> {text}
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}

// eslint-disable-next-line react/prop-types
const BasicTimeline = ({title, icon, children}) => {
    return (
        <div>
            <Timeline className={'timeline'}>
                {/* Item Header */}
                <TimelineItem className={'timeline_first'}>
                    <TimelineSeparator>
                        <TimelineDot className={'timeline_dot_header'}>{icon}</TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' className={'timeline_header'}>
                            {title}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                {children}
            </Timeline>
        </div>
    )
}


export default BasicTimeline;