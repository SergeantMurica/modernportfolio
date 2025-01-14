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
                    icon: <CodeIcon />,
                    text:
                        "Build comprehensive web solutions by combining front-end user interfaces with back-end logic " +
                        "and database integration for a seamless experience."
                },
                ai: {
                    title: "Custom AI",
                    icon: <CodeIcon />,
                    text:
                        "Develop tailored Python-based AI tools to automate tasks, enhance business processes, " +
                        "and solve unique problems."
                },
                consulting: {
                    title: "Game Development",
                    icon: <CodeIcon />,
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
                    title: "Social Media Management",
                    icon: <CodeIcon />,
                    text:
                        "Plan and execute strategies to grow audiences, increase engagement, " +
                        "and amplify brand presence across social media platforms."
                },
                SEO: {
                    title: "SEO Optimization",
                    icon: <CodeIcon />,
                    text:
                        "Enhance website visibility by improving search engine rankings through keyword research, " +
                        "on-page optimization, and analytics-based insights.",
                    last: true,
                },
            },
        },

        skills: {
            title: "My Skills",
            coding: {
                javascript: {
                    icon: <CodeIcon />,
                    title: "JavaScript",
                    time: "1 year"
                },
                typescript: {
                    icon: <CodeIcon />,
                    title: "Typescript",
                    time: "< 1 year"
                },
                react: {
                    icon: <CodeIcon />,
                    title: "React.js",
                    time: "1 year"
                },
                swift: {
                    icon: <CodeIcon />,
                    title: "Swift",
                    time: "< 1 year"
                },
                python: {
                    icon: <CodeIcon />,
                    title: "Python",
                    time: "1 year"
                },
                cpp: {
                    icon: <CodeIcon />,
                    title: "C++",
                    time: "2 years"
                },
                SQL: {
                    icon: <CodeIcon />,
                    title: "SQL",
                    time: "< 1 year"
                },
                HTML: {
                    icon: <CodeIcon />,
                    title: "HTML",
                    time: "4 years"
                },
                CSS: {
                    icon: <CodeIcon />,
                    title: "CSS",
                    time: "4 years",
                    last: true,
                },
            },

            other: {
                SEO: {
                    icon: <CodeIcon />,
                    title: "Search Engine Optimization",
                    time: "3 years"
                },
                SMM: {
                    icon: <CodeIcon />,
                    title: "Social Media Management",
                    time: "3 years"
                },
                edu: {
                    icon: <CodeIcon />,
                    title: "Education",
                    time: "4 years"
                },
                video: {
                    icon: <CodeIcon />,
                    title: "Video Editing",
                    time: "4 years",
                    last: true,
                },
            },
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
                description: "Assisted in managing a 90,000-member online community, while organizing events.",
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

        mainCerts: {

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

        otherCerts: {

            javascript: {
                title: "JavaScript",
                company: "Mimo.org",
                img: "/assets/images/certs/JavaScriptCert.jpg",
            },
            typescript: {
                title: "Typescript",
                company: "Mimo.org",
                img: "/assets/images/certs/TypescriptCert.jpg",
            },
            react: {
                title: "React.js",
                company: "Mimo.org",
                img: "/assets/images/certs/ReactCert.jpg",
            },
            SQL: {
                title: "SQL",
                company: "Mimo.org",
                img: "/assets/images/certs/SQLCert.jpg",
            },
            swift: {
                title: "Swift",
                company: "Mimo.org",
                img: "/assets/images/certs/SwiftCert.jpg",
            },
            python: {
                title: "Python",
                company: "Mimo.org",
                img: "/assets/images/certs/PythonCert.jpg",
            },
            HTML: {
                title: "HTML",
                company: "Mimo.org",
                img: "/assets/images/certs/HTMLCert.jpg",
            },
            CSS: {
                title: "CSS",
                company: "Mimo.org",
                img: "/assets/images/certs/CSSCert.jpg",
                last: true,
            },
        }
    }
}