import React from "react";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiRedux, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { BsStars } from "react-icons/bs";

const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
    { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> }
];

const Skills = () => {
    return (
        <section className="skills-section">
            <h2 className="heading">Skills</h2>
            <div className="badge">
                <BsStars className="badge-icon" />
                <span>"Navigating the universe of code, skill by skill."</span>
            </div>
            <p className="subtext">A collection of tools and technologies I use and keep improving on. 🌌</p>

            <div className="skills-container">
            
                <div className="skills-grid">
                    <div className="skills-row">
                        {skills.slice(0, 5).map((skill, index) => (
                            <div key={index} className="skill-item">
                                {skill.icon}
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="skills-row">
                        {skills.slice(5, 9).map((skill, index) => (
                            <div key={index} className="skill-item">
                                {skill.icon}
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="skills-row">
                        {skills.slice(9).map((skill, index) => (
                            <div key={index} className="skill-item">
                                {skill.icon}
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
