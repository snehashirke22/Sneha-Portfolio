import React from "react"
import { projects } from "../constants";
import { MdLaptopChromebook } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <section className="text-center py-[60px] px-5 text-white mt-[40%] md:mt-0 ml-[25px] md:ml-0 w-full md:w-auto">
            <h2 className="text-[40px] mb-2.5 text-primary font-bold">Projects</h2>
            <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-primary bg-white/20 rounded-full text-white text-sm mb-4 font-medium shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                <MdLaptopChromebook className="text-white text-base" />
                <span>"Where ideas take flight in lines of code."</span>
            </div>
            <p className="text-[17.6px] mb-10 text-[#c1c1c1]">Projects I’ve built using different tools and technologies. 🛠️</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4 md:px-0">
                {projects.map((project) => (
                    <div className="bg-[#101225] rounded-[12px] p-6 shadow-[0_0_10px_4px_rgba(77,183,247,0.4)] transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full" key={project.id}>
                        
                        <div className="w-full aspect-video overflow-hidden rounded-[10px] mb-5 bg-[#0a0c1b]">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        
                        <h3 className="text-xl text-primary font-bold mb-3">{project.title}</h3>
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="bg-[#ecf0f120] text-primary py-1 px-3 rounded-full text-xs font-medium">{tech}</span>
                            ))}
                        </div>
                        
                        <p className="text-sm text-[#a1a1a1] mb-6 flex-grow leading-relaxed">{project.description}</p>
                        
                        <div className="border-t border-[#444] mt-auto flex justify-between overflow-hidden rounded-b-xl -mx-6 -mb-6">
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 text-white no-underline font-medium flex justify-center items-center gap-2 text-sm transition-colors duration-300 hover:bg-[#1f2035] border-r border-[#444]">
                                <FaGithub /> Github
                            </a>
                            <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 text-white no-underline font-medium flex justify-center items-center gap-2 text-sm transition-colors duration-300 hover:bg-[#1f2035]">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-[40px] text-white">View More on <a href="https://github.com/snehashirke22?tab=repositories" className="text-primary hover:underline">Github</a></p>
        </section>
    )
}

export default Projects