import React from "react"
import "../styles/Projects.css";
import { projects } from "../components/ProjectData";
import { MdLaptopChromebook } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="heading">Projects</h2>
            <div className="badge">
                <MdLaptopChromebook className="badge-icon" />
                <span>"Where ideas take flight in lines of code."</span>
            </div>
            <p className="subtext">Projects I’ve built using different tools and technologies. 🛠️</p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-img" />
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-tags">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="project-tag">{tech}</span>
                            ))}
                        </div>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-footer">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <FaGithub /> Github
                            </a>
                            <a href={project.demo} target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>

                    </div>
                ))}
            </div>
            <p style={{marginTop:"40px"}}>View More on <a href="https://github.com/snehashirke22?tab=repositories">Github</a></p>
        </section>
    )
}

export default Projects