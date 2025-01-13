import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
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
export const CustomResumeItem = ({title, company, date, text, last}) => {

    return (
        <TimelineItem>
            {last ? <CustomNolineSeparator/> : <CustomTimelineSeparator />}
            <TimelineContent>
                <Typography className="work_title">{title}</Typography>
                <Typography className="work_company">{company}</Typography>
                <Typography variant='caption' className="work_date">{date}</Typography>
                <Typography variant='body2' className="work_text">{text}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}


// eslint-disable-next-line react/prop-types
const CustomTimeline = ({title, icon, children}) => {
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


export default CustomTimeline;