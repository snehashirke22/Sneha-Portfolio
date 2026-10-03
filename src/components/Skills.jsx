import React from "react";
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
        <section className="text-center py-[60px] px-5 text-white mt-[40%] md:mt-0 ml-[25px] md:ml-0 w-full md:w-auto flex flex-col items-center justify-center">
            <h2 className="text-[40px] mb-2.5 text-primary font-bold">Skills</h2>
            <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-primary bg-white/20 rounded-full text-white text-sm mb-4 font-medium shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                <BsStars className="text-white text-base" />
                <span>"Navigating the universe of code, skill by skill."</span>
            </div>
            <p className="text-[17.6px] mb-10 text-[#c1c1c1]">A collection of tools and technologies I use and keep improving on. 🌌</p>

            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-0 max-w-[1000px] mx-auto w-full">
            
                <div className="flex flex-col gap-5 flex-1 justify-center items-center w-full">
                    <div className="flex justify-center gap-5 flex-wrap">
                        {skills.slice(0, 5).map((skill, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-sm text-white w-[90px] h-[90px] rounded-full bg-[#2e2e2e] transition-all duration-300 shadow-[0_0_15px_4px_rgba(77,183,247,0.4)] hover:scale-110 hover:shadow-[0_0_25px_8px_rgba(77,183,247,0.7)] group">
                                <div className="text-[30px] mb-[5px]">{skill.icon}</div>
                                <p className="m-0 text-[13.6px] text-[#cfcfcf]">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-5 flex-wrap">
                        {skills.slice(5, 9).map((skill, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-sm text-white w-[90px] h-[90px] rounded-full bg-[#2e2e2e] transition-all duration-300 shadow-[0_0_15px_4px_rgba(77,183,247,0.4)] hover:scale-110 hover:shadow-[0_0_25px_8px_rgba(77,183,247,0.7)] group">
                                <div className="text-[30px] mb-[5px]">{skill.icon}</div>
                                <p className="m-0 text-[13.6px] text-[#cfcfcf]">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-5 flex-wrap">
                        {skills.slice(9).map((skill, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-sm text-white w-[90px] h-[90px] rounded-full bg-[#2e2e2e] transition-all duration-300 shadow-[0_0_15px_4px_rgba(77,183,247,0.4)] hover:scale-110 hover:shadow-[0_0_25px_8px_rgba(77,183,247,0.7)] group">
                                <div className="text-[30px] mb-[5px]">{skill.icon}</div>
                                <p className="m-0 text-[13.6px] text-[#cfcfcf]">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
