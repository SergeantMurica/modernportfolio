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

    home: {
        aboutMe: {
            title: "About me",
            start:
                "I am a dedicated full-stack developer with a diverse background in military service, education, " +
                "and social media marketing. My passion lies in crafting efficient and innovative web solutions " +
                "that make a meaningful impact.",
            mid:
                "As a mental health advocate and content creator, I’ve channeled my personal experiences to help " +
                "others navigate life’s challenges, building communities focused on awareness and support. " +
                "This mission has shaped my commitment to leveraging technology to empower creators and foster positivity.",
            end:
                "I aspire to advance my career as a developer by designing tools and platforms that enable content " +
                "creators to connect, inspire, and bring more joy into the lives of their audiences.",
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
            free: {
                title: "Freelancer",
                company: "Self-Employed",
                date: "08/2022 - Current",
                description: "",
            },
            content: {
                title: "Content Creator",
                company: "Self-Employed",
                date: "04/2021 - 12/2024",
                description: "Produce content focused on mental health awareness and suicide prevention through gaming and entertainment.",
                twitch: "1.5k followers",
                tiktok: "21k followers",
                youtube: "8k followers",
            },
            sales: {
                title: "Sales Professional",
                company: "Bell Honda",
                date: "10/2023 - 11/2023",
                description: "Engaged with clients to identify needs and deliver desired vehicle.",
            },
            DoD: {
                title: "Director of Development",
                company: "Veterans Gaming & Mental Health Mission",
                date: "01/2023 - 05/2023",
                description: "Led development initiatives to secure funding and build partnerships for the organization. While also designing and implemented strategic plans to enhance organizational growth.",
            },
            DoM: {
                title: "Volunteer Director of Marketing",
                company: "Veterans Gaming & Mental Health Mission",
                date: "05/2022 - 01/2023",
                description: "Managed SEO strategies, advertising campaigns, and the social media presence of the organization. Also redesigned the organization's website to improve functionality and engagement.",
            },
            wj: {
                title: "Social Media Coordinator",
                company: "Liftable Media",
                date: "03/2022 - 8/2022",
                description: "Planned, created, and scheduled content for Western Journal News. Helped establish a successful workflow for producing and distributing news shorts on TikTok, YouTube, and Instagram Reels.",
            },
            teach: {
                title: "Substitute Teacher",
                company: "DVUSD",
                date: "09/2020 - 05/2021",
                description: "Delivered flexible teaching solutions, adapting to various educational levels and classroom needs.",
            },
            dub: {
                title: "Volunteer Moderator/Event Manager",
                company: "JoshDub’s Discord Server",
                date: "11/2019 - 05/2022",
                description: "Assisted in managing a +90,000 member online community, while organizing events.",
            },
            army: {
                title: "Combat Medic/Healthcare Specialist",
                company: "U.S. Army",
                date: "06/2013 - 06/2018",
                description: "Delivered emergency medical treatment and primary care for soldiers in both normal, and critical situations.",
                last: true,
            },
        },

        education: {
            pol: {
                major: "Bachelor of Science in Political Science",
                minor:
                    "Completed with concentrations in International Relations, Public Administration, and a minor in History. " +
                    "While also completing Leadership Fellows and NSLS curriculum and requirements",
                school: "Methodist University",
                date: "09/2018 - 05/2020",
                last: true,
            },
        },

        certs: {

            fullStack: {
                title: "Full-Stack Development",
                company: "Mimo.org",
                img: "/assets/images/certs/FullStackCert.jpg",
            },
            frontEnd: {
                title: "Front-End Development",
                company: "Mimo.org",
                img: "/assets/images/certs/FrontEndCert.jpg",
            },
            backEnd: {
                title: "Back-End Development",
                company: "Mimo.org",
                img: "/assets/images/certs/BackEndCert.jpg",
            },
            ai: {
                title: "AI Development in Python",
                company: "Mimo.org",
                img: "/assets/images/certs/PythonAICert.jpg",
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
            url: "https://www.linkedin.com/in/alexanderscastro/",
            icon: <LinkedInIcon />,
        },
        {
            url: "https://github.com/SergeantMurica",
            icon: <GitHubIcon />,
        },
        {
            url: "https://leetcode.com/u/SergeantMurica/",
            icon: <CodeIcon />,
        },
        {
            url: "https://www.facebook.com/SergeantMurica",
            icon: <FacebookIcon />,
        },
        {
            url: "https://www.youtube.com/c/SergeantMurica",
            icon: <YouTubeIcon />,
        },
        {
            url: "https://twitter.com/SergeantMurica",
            icon: <XIcon />,
        },
        {
            url: "https://instagram.com/sergeantmurica",
            icon: <InstagramIcon />,
        },
    ],

    portfolio: [
        {
            tag: "",
            img: "/assets/images/certs/FullStackCert.jpg",
            webimg: "",
            url: "",
            title: "Pokemon Website",
            description: "",
            path:"",
        },
        {
            tag: "",
            img: "",
            webimg: "https://pokemon-gamepage.vercel.app/",
            url: "",
            title: "Pokemon Website",
            description: "",
        },
    ],

}