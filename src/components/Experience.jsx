import React from "react"
import { experiences } from "../constants";
import { MdWork } from "react-icons/md";

const Experience = () => {
    return (
        <>
            <div className="text-center py-[60px] px-5 text-white mt-[20%] md:mt-0 ml-[25px] md:ml-0 w-full md:w-auto">

                <h2 className="text-[40px] mb-2.5 text-primary font-bold">Experience</h2>
                <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-primary bg-white/20 rounded-full text-white text-sm mb-4 font-medium shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                    <MdWork className="text-white text-base" />
                    <span>"Every role, a chapter in my professional journey."</span>
                </div>
                <p className="text-[17.6px] mb-10 text-[#c1c1c1]">Highlights of my work experience and contributions to various teams.🏢</p>

            </div>
            <div className="relative pl-[60px] max-w-[900px] mx-auto ml-[15px] md:ml-auto">

                <div className="absolute left-[35px] top-0 w-[2px] h-full bg-gradient-to-b from-[#00f0ff] via-[#b600ff] to-[#00f0ff] animate-[scrollGlow_6s_linear_infinite] shadow-[0_0_12px_#00f0ff,0_0_24px_#b600ff]"></div>

                {experiences.map((exp) => (
                    <div key={exp.id} className="relative w-full mb-8 pr-6 md:pr-0">
                        <img src={exp.logo} alt={`${exp.company} Logo`} className="absolute w-[50px] h-[50px] object-contain rounded-full bg-white -left-[25px] -translate-x-1/2 top-4 z-10" />
                        <div className="bg-[#101225] rounded-xl p-6 flex items-start gap-5 shadow-[0_0_12px_rgba(0,255,255,0.1)]">
                            <div className="w-full">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <h1 className="text-[23px] m-0 mb-1.5 text-white font-bold">{exp.role}</h1>
                                    <p className="text-[15px] md:text-[14px] text-primary mt-2 md:mt-0">{exp.duration}</p>
                                </div>
                                <p className="text-[18px] md:text-[15px] text-[#aaa] mt-0 mb-3">{exp.location}</p>

                                <ul className="pl-5 m-0 mt-[15px] mb-3 list-disc">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="mb-1.5 text-[17px] md:text-[15px] leading-[1.6]">{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience
