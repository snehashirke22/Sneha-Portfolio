import React from "react"
import "../styles/Experience.css"
import accentureLogo from "../assets/accenture.png"
import broadwayLogo from "../assets/Broadway.png"
import { MdWork } from "react-icons/md";

const Experience = () => {
    return (
        <>
            <div className="experience-section">

                <h2 className="heading">Experience</h2>
                <div className="badge">
                    <MdWork className="badge-icon" />
                    <span>"Every role, a chapter in my professional journey."</span>
                </div>
                <p className="subtext">Highlights of my work experience and contributions to various teams.🏢</p>

            </div>
            <div className="experience-container">

                <div className="glow-line"></div>

                <img src={accentureLogo} alt="Accenture Logo" className="exp-logo" />
                <div className="experience-card">
                    <div className="exp-content">
                        <div className="company-row">
                            <h1>Software Engineer</h1>
                            <p className="date">February 2025 - Present</p>
                        </div>
                        <p className="company-location">Accenture, Mumbai, India</p>

                        <ul>
                            <li>Designed and developed custom data applications, implemented enhancements, and resolved bugs in ETL workflows to improve performance and maintain reliability.</li>
                            <li>Ensured data integrity through robust validation, pre-processing, and transformation logic including handling missing values and format standardization.</li>
                            <li>Collaborated in review sessions of ETL pipelines and data mappings, contributing actionable feedback to maintain high-quality, scalable data systems.</li>
                        </ul>
                    </div>
                </div>

                <img src={broadwayLogo} alt="Broadway Logo" className="exp-logo" />
                <div className="experience-card">
                    <div className="exp-content">
                        <div className="company-row">
                            <h1>Intern</h1>
                            <p className="date">May 2024 - January 2025</p>
                        </div>
                        <p className="company-location">Broadway, Mumbai, India</p>
                        <ul>
                            <li>Contributed to an Agile Scrum project for Broadway, participating in requirement analysis while enhancing user interfaces by incorporating React.js workflows and best practices for responsive, intuitive designs.</li>
                            <li>Worked in a team to test and validate RESTful and GraphQL APIs, analyzing query structures, validating mutations, creating JSON payloads, and ensuring efficient data flow.</li>
                            <li>Engaged in debugging and troubleshooting sessions with the team to resolve blockers. Collaborated effectively with other developers to resolve complex issues, enhance software quality throughout the SDLC and ensure timely delivery of high-impact features.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
