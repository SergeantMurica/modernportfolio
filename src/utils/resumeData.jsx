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

    resume: {
        aboutMe: {
            title: "About me",
            text: "I am a dedicated full-stack developer with a diverse background in military service, education, and social media marketing. My passion lies in crafting efficient and innovative web solutions that make a meaningful impact.\n" +
                "\n" +
                "As a mental health advocate and content creator, I’ve channeled my personal experiences to help others navigate life’s challenges, building communities focused on awareness and support. This mission has shaped my commitment to leveraging technology to empower creators and foster positivity.\n" +
                "\n" +
                "I aspire to advance my career as a developer by designing tools and platforms that enable content creators to connect, inspire, and bring more joy into the lives of their audiences.",
        },
        services: {
            title: "My Services",
            thumbnail: {
                web: {
                    title: "Web Development",
                    icon: <CodeIcon />,
                    text: "Build comprehensive web solutions by combining front-end user interfaces with back-end logic and database integration for a seamless experience."
                },
                ai: {
                    title: "Custom AI",
                    icon: <CodeIcon />,
                    text: "Develop tailored Python-based AI tools to automate tasks, enhance business processes, and solve unique problems."
                },
                teach: {
                    title: "Coding Tutorials",
                    icon: <CodeIcon />,
                    text: "Provide beginner-to-intermediate programming lessons in Python, JavaScript, SQL, and web development to help others learn and grow their technical skills."
                },
                SMM: {
                    title: "Social Media Management",
                    icon: <CodeIcon />,
                    text: "Plan and execute strategies to grow audiences, increase engagement, and amplify brand presence across social media platforms."
                },
                SEO: {
                    title: "SEO Optimization",
                    icon: <CodeIcon />,
                    text: "Enhance website visibility by improving search engine rankings through keyword research, on-page optimization, and analytics-based insights."
                },
                consulting: {
                    title: "Content Creation Consulting",
                    icon: <CodeIcon />,
                    text: "Offer advice and strategies for growing, monetizing, and optimizing content across social media platforms."
                },
            },
        },
        Certs: {
        },
    }
}