import React from "react";

// Project Images
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";

// Experience Logos
import tapfinLogo from "./assets/tapfin.png";
import earth from "./assets/earth.png";
import accentureLogo from "./assets/accenture.png";
import broadwayLogo from "./assets/Broadway.png";

// Education Images
import mars from "./assets/mars.png";
import jupiter from "./assets/jupiter.png";
import mercury from "./assets/mercury.png";

// Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaNetworkWired } from "react-icons/fa";
import { SiRedux, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiAxios, SiSocketdotio } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const projects = [
  {
    id: 1,
    image: project1,
    title: "Ingredify AI",
    stack: ["React", "Node.js", "MongoDB", "Gemini API"],
    description: "An AI-powered MERN app enables users to generate recipes based on ingredients they provide and offers categorized recipes through external APIs.",
    github: "https://github.com/snehashirke22/Ingredify",
    demo: "https://ingredify-ai.onrender.com/"
  },
  {
    id: 2,
    image: project2,
    title: "RentWheel",
    stack: ["React", "Node.js", "MongoDB", "Stripe API"],
    description: "RentWheel is a vehicle rental platform where users can rent from various vehicles, offer their own vehicle to earn, and hire drivers — all in one place.",
    github: "https://github.com/snehashirke22/RentWheel-Vehicle-Rental-Web",
    demo: "https://rentwheel.onrender.com/"
  },
  {
    id: 3,
    image: project3,
    title: "MovieMania",
    stack: ["React", "TMDB API"],
    description: "MovieMania is a React.js web app that fetches trending and latest movie details using the TMDB API, letting users explore movies with their complete information.",
    github: "https://github.com/snehashirke22/Movie-Mania",
    demo: "https://movie-mania-wynv.onrender.com/"
  },
  {
    id: 4,
    image: project4,
    title: "Word Lookup Tool",
    stack: ["React", "MyMemory API", "Dictionary API"],
    description: "A Chrome extension that lets users highlight any word on a webpage to instantly view its definition, synonyms, and translations without leaving the page.",
    github: "https://github.com/snehashirke22/Word-Lookup-Tool",
    demo: "https://github.com/snehashirke22/Word-Lookup-Tool"
  },
  {
    id: 5,
    image: project5,
    title: "WeatherCast",
    stack: ["React", "Node.js", "OpenWeather API"],
    description: "WeatherCast provides real-time weather updates and a 5-day forecast with location-based insights, fetching accurate climate information from OpenWeather API.",
    github: "https://github.com/snehashirke22/Weather-Forecast",
    demo: "https://weathercast-w4u2.onrender.com/"
  },
  {
    id: 6,
    image: project6,
    title: "React Quiz App",
    stack: ["React"],
    description: "QuizMaster is an interactive quiz app featuring multiple-choice questions across topics. Users can select answers, receive instant feedback, and view results at the end.",
    github: "https://github.com/snehashirke22/React-Quiz-App",
    demo: "https://quizmasterreact.netlify.app/"
  }
];

export const experiences = [
    {
        id: 1,
        logo: tapfinLogo,
        company: "TapFin (Tapsys Pvt Ltd.)",
        role: "Junior Software Engineer",
        duration: "Sep 2025 - Present",
        location: "Mumbai, India",
        responsibilities: [
            "Engineered end-to-end modules from scratch with full ownership using React.js and TypeScript for enterprise B2B products, driving frontend design and architectural decisions across electric vehicle (EV) analytics dashboards, fleet tracking and management system, and driver management systems.",
            "Designed robust global state architectures using Redux-Saga to handle multi-step flows, race conditions, side effects, and heavy API polling across critical user journeys.",
            "Developed dynamic interactive tracking maps integrating Leaflet.js, rendering custom asset markers, real-time vehicle telemetry, trip histories, and alerts management while handling complex data.",
            "Architected the core UI interface and functional workflows for an in-app real-time AI chatbot, managing complex WebSocket event handling and message streams, and built the end-to-end vehicle resell marketplace.",
            "Implemented secure authentication flows (login, signup, role-based access control) and refactored legacy modules to ensure clean code separation and maintainability, leveraging React context management and Axios interceptors for resilient error handling and race-condition prevention.",
            "Contributed to core fintech product workflows, building intuitive interfaces and internal admin portals for the Loan Management System (LMS) and Customer Management System (CMS) to streamline credit evaluations and operations, while actively conducting code reviews to uphold code quality."
        ]
    },
    {
        id: 2,
        logo: accentureLogo,
        company: "Accenture",
        role: "Associate Software Engineer",
        duration: "Feb 2025 - Aug 2025",
        location: "Mumbai, India",
        responsibilities: [
            "Collaborated with large cross-functional onshore and offshore teams to design, build, and configure enterprise applications aligned with complex business requirements, actively debugging and resolving critical application bottlenecks.",
            "Contributed to a large-scale data migration initiative for a premier Australian banking client, coordinating defect lifecycles, documentation, and version-controlled updates using Jira, Confluence, and Git."
        ]
    },
    {
        id: 3,
        logo: broadwayLogo,
        company: "Broadway (Think9 Digital Consumers)",
        role: "Software Intern",
        duration: "May 2024 - Jan 2025",
        location: "Mumbai, India",
        responsibilities: [
            "Worked from scratch as part of the core engineering team in a fast-paced, early-stage startup environment, leveraging Agile/Scrum methodologies to build and maintain internal admin dashboards with intuitive, responsive designs supporting Broadway’s B2C e-commerce platform and mobile app, enhancing user experience."
        ]
    }
];

export const educationData = [
    {
        id: 1,
        planet: mars,
        title: 'Secondary School Education',
        institution: 'Saraswati Vidya Mandir',
        location: 'Mumbai, Maharashtra',
        year: '2009 - 2019',
    },
    {
        id: 2,
        planet: jupiter,
        title: 'Higher Secondary School Education',
        institution: 'Ramniranjan Jhunjhunwala College',
        location: 'Mumbai, Maharashtra',
        year: '2019 - 2021',
    },
    {
        id: 3,
        planet: mercury,
        title: 'Bsc in Information Technology',
        institution: 'Bhavans College',
        location: 'Mumbai, Maharashtra',
        year: '2021 - 2024',
    },
];

export const skills = [
    { id: 1, name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { id: 2, name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { id: 3, name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { id: 4, name: "React", icon: <FaReact color="#61DBFB" /> },
    { id: 5, name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { id: 6, name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { id: 7, name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
    { id: 8, name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
    { id: 9, name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
    { id: 10, name: "Express", icon: <SiExpress color="#FFFFFF" /> },
    { id: 11, name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
    { id: 12, name: "Axios", icon: <SiAxios color="#5A29E4" /> },
    { id: 13, name: "REST API", icon: <TbApi color="#FFFFFF" /> },
    { id: 14, name: "Websockets", icon: <SiSocketdotio color="#FFFFFF" /> }
];

export const contacts = [
    { id: 1, label: "GitHub", link: "https://github.com/snehashirke22", icon: <FaGithub /> },
    { id: 2, label: "LinkedIn", link: "https://www.linkedin.com/in/sneha-rajeshirke-44827424b/", icon: <FaLinkedin /> },
    { id: 3, label: "Email", link: "mailto:rajeshirkesneha.work@gmail.com", icon: <FaEnvelope /> }
];
