import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Icon, Typography} from "@mui/material";
import './CustomTimeline.css'


export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'timeline_separator'}>
        <TimelineDot className={'timeline_dot'}></TimelineDot>
        <TimelineConnector />
    </TimelineSeparator>
)

const CustomTimeline = ({title}) => {
    return (
        <div>
            <Timeline>
                {/* Item Header */}
                <TimelineItem className={'timeline_first'}>
                    <TimelineSeparator>
                        <TimelineDot className={'timeline_dot_header'}>{<Icon/>}</TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><Typography variant='h6' className={'timeline_header'}>{title}</Typography></TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    {/* Items */}
                    <CustomTimelineSeparator/>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}


export default CustomTimeline;