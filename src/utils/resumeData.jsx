import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SourceIcon from '@mui/icons-material/Source';
import PublicIcon from '@mui/icons-material/Public';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import WebIcon from '@mui/icons-material/Web';
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TagIcon from "@mui/icons-material/Tag";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MemoryIcon from '@mui/icons-material/Memory';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GamepadIcon from '@mui/icons-material/Gamepad';





export default {
    name: "Your Name",
    title: "Desired Job Title",
    birthday: "Insert Date",
    email: "YourEmail@outlook.com",
    jobTitle: "Current Job Title",

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

    home: {
        aboutMe: {
            title: "About me",
            start:
                "Write",
            mid:
                "Your",
            end:
                "About Me",
        },
        services: {
            title: "My Services",
            thumbnail: {
                web: {
                    title: "Web Development",
                    icon: <WebIcon />,
                    text:
                        "Build comprehensive web solutions by combining front-end user interfaces with back-end logic " +
                        "and database integration for a seamless experience."
                },
                ai: {
                    title: "Custom AI",
                    icon: <SmartToyIcon />,
                    text:
                        "Develop tailored Python-based AI tools to automate tasks, enhance business processes, " +
                        "and solve unique problems."
                },
                consulting: {
                    title: "Game Development",
                    icon: <SportsEsportsIcon />,
                    text:
                        "Use Knowledge of Unreal Engine and C++/C to develop games, or templates. " +
                        "Like the templates I sell on my Unreal Marketplace."
                },
                teach: {
                    title: "Coding Tutorials",
                    icon: <CodeIcon />,
                    text:
                        "Provide beginner-to-intermediate programming lessons in Python, JavaScript, SQL, " +
                        "and web development to help others learn and grow their technical skills."
                },
                SMM: {
                    title: "Content Strategy",
                    icon: <TagIcon />,
                    text:
                        "Plan and execute strategies to grow audiences, increase engagement, " +
                        "and amplify brand presence across social media platforms."
                },
                SEO: {
                    title: "SEO Optimization",
                    icon: <PublicIcon />,
                    text:
                        "Enhance website visibility by improving search engine rankings through keyword research, " +
                        "on-page optimization, and analytics-based insights.",
                    last: true,
                },
            },
        },

        skills: {
            title: "My Skills",
            groups: [
                {
                    icon: <WebAssetIcon />,
                    title: "Front-End Development",
                    description: [
                        "React.JS",
                        "Javascript",
                        "TypeScript",
                        "Material-UI",
                    ],
                },
                {
                    icon: <DnsIcon />,
                    title: "Back-End Development",
                    description: [
                        "Node.JS",
                        "Express",
                        "Python",
                    ],
                },
                {
                    icon: <StorageIcon />,
                    title: "Database Engineering",
                    description: [
                        "Firebase",
                        "MySQL",
                        "MongoDB",
                        "Postgres",
                    ],
                },
                {
                    icon: <GamepadIcon />,
                    title: "Game Development",
                    description: [
                        "C++",
                        "C",
                        "Python",
                        "Unreal Engine"
                    ],
                },
                {
                    icon: <SourceIcon />,
                    title: "Source Control",
                    description: [
                        "Git",
                        "GitHub",
                        "GitLab"
                    ],
                },
                {
                    icon: <PublicIcon />,
                    title: "Digital Marketing",
                    description: [
                        "SEO",
                        "Content Strategy",
                        "Advertising",
                        "Community Management",
                    ],
                },
                {
                    icon: <SmartphoneIcon />,
                    title: "Mobile App Development",
                    description: [
                        "React Native",
                        "Swift",
                        "iOS Development",
                    ],
                },
                {
                    icon: <CodeIcon />,
                    title: "Algorithms & Data Structures",
                    description: [
                        "Big O Notation",
                        "Sorting Algorithms",
                        "Graph Algorithms",
                        "Dynamic Programming",
                    ],
                },
                {
                    icon: <MemoryIcon />,
                    title: "AI & Machine Learning",
                    description: [
                        "Python AI Development",
                        "TensorFlow",
                        "OpenAI API",
                        "Natural Language Processing (NLP)",
                    ],
                },
            ],
        },
    },

    resume: {
        worktitle: "Working History",
        edutitle: "Education History",
        certtitle: "My Certifications",

        work: {
            job: {
                title: "Job Title",
                company: "Company Name",
                date: "06/2013 - 06/2018",
                description: "Job description",
                last: true,
            },
        },

        education: {
            edu: {
                major: "Bachelor of Science in Something",
                description: "description",
                school: "University Name",
                date: "09/2018 - 05/2020",
                last: true,
            },
        },

        certs: {
            cert: {
                title: "Certificate Title",
                company: "Company Name",
                image: "/assets/images/certs/certificate1.jpg",
                last: true,
            },

        },
    },
    languages1: [
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sqlite.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/cplusplus.svg" },
        { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/unrealengine.svg" },
        { name: "Material-UI", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/material-ui.svg" },
        { name: "DaVinci Resolve", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/davinciresolve.svg" },
        { name: "React.JS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg" },
        { name: "Buffer", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/buffer.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg" },
        { name: "Swift", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/swift.svg" },
    ],

    languages2: [
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/gitlab.svg" },
        { name: "Node.JS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodejs.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg" },
        { name: "Postgres", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg" },
        { name: "Hootsuite", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/hootsuite.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/vercel.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/c.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg" },
    ],

    contact: [
        {
            key: "LinkedIn",
            url: "https://www.linkedin.com/in/alexanderscastro/",
            icon: <LinkedInIcon />,
        },
        {
            key: "Github",
            url: "https://github.com/SergeantMurica",
            icon: <GitHubIcon />,
        },
        {
            key: "LeetCode",
            url: "https://leetcode.com/u/SergeantMurica/",
            icon: <CodeIcon />,
        },
        {
            key: "Facebook",
            url: "https://www.facebook.com/SergeantMurica",
            icon: <FacebookIcon />,
        },
        {
            key: "YouTube",
            url: "https://www.youtube.com/c/SergeantMurica",
            icon: <YouTubeIcon />,
        },
        {
            key: "X",
            url: "https://twitter.com/SergeantMurica",
            icon: <XIcon />,
        },
        {
            key: "Instagram",
            url: "https://instagram.com/sergeantmurica",
            icon: <InstagramIcon />,
        },
    ],

    portfolio: [
        {
            tag: "React.js",
            image: "/assets/images/portfolio/portfolio4.jpg",
            url: "",
            title: "Title",
            description: "A long description",
            caption: "A short description",
        },
        {
            tag: "JavaScript",
            image: "/assets/images/portfolio/portfolio1.jpg",
            url: "",
            title: "Title",
            description: "A long description",
            caption: "A short description",
        },
        {
            tag: "Typescript",
            image: "/assets/images/portfolio/portfolio2.jpg",
            url: "",
            title: "Title",
            description: "A long description",
            caption: "A short description",
        },
        {
            tag: "Python",
            image: "/assets/images/portfolio/portfolio3.jpg",
            url: "",
            title: "Title",
            description: "A long description",
            caption: "A short description",
        },
        {
            tag: "Python",
            image: "/assets/images/portfolio/portfolio5.jpg",
            url: "",
            title: "Title",
            description: "A long description",
            caption: "A short description",
        },
    ],

}