import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default {
    name: "Alexander Castro",
    title: "Full Stack Developer",
    birthday: "March 1st, 1995",
    email: "castroalexander1995@outlook.com",
    jobTitle: "Freelance Developer",

    socials: {
        Linkedin: {
            url: "https://www.linkedin.com/in/alexanderscastro/",
            text: "My LinkedIn",
            icon: <LinkedInIcon />,
        },
        Github: {
            url: "https://github.com/SergeantMurica",
            text: "My Github",
            icon: <GitHubIcon />,
        },
        LeetCode: {
            url: "https://leetcode.com/u/SergeantMurica/",
            text: "My LeetCode",
            icon: <CodeIcon />,
        },
        Youtube: {
            url: "https://www.youtube.com/c/SergeantMurica",
            text: "My Youtube",
            icon: <YouTubeIcon />,
        },

    },
}