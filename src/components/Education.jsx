import React from "react";
import { MdSchool } from "react-icons/md";
import mars from "../assets/mars.png";
import jupiter from "../assets/jupiter.png";
import mercury from "../assets/mercury.png"

const educationData = [
    {
        planet: mars,
        title: 'Secondary School Education',
        institution: 'Saraswati Vidya Mandir',
        location: 'Mumbai, Maharashtra',
        year: '2009 - 2019',
    },
    {
        planet: jupiter,
        title: 'Higher Secondary School Education',
        institution: 'Ramniranjan Jhunjhunwala College',
        location: 'Mumbai, Maharashtra',
        year: '2019 - 2021',
    },
    {
        planet: mercury,
        title: 'Bsc in Information Technology',
        institution: 'Bhavans College',
        location: 'Mumbai, Maharashtra',
        year: '2021 - 2024',
    },
];

const Education = () => {
    return (
        <section className="text-center py-[60px] px-5 text-white mt-[20%] md:mt-0 flex flex-col items-center ml-[25px] md:ml-0 w-full md:w-auto">
            <h2 className="text-[40px] mb-2.5 text-primary font-bold">Education</h2>
            <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-primary bg-white/20 rounded-full text-white text-sm mb-4 font-medium shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                <MdSchool className="text-white text-base" />
                <span>"The universe of learning starts here."</span>
            </div>
            <p className="text-[17.6px] mb-10 text-[#c1c1c1]">My academic journey through school and college. 📚</p>
            
            <div className="w-full flex justify-center ml-[20px] md:ml-0">
                <div className="flex flex-col md:flex-row relative items-center gap-[80px] p-4 mr-[45px] md:mr-0">
                    <div className="absolute left-1/2 md:left-0 top-0 md:top-[78px] w-[2px] md:w-full h-full md:h-[2px] mt-0 md:mt-[90px] bg-[repeating-linear-gradient(to_bottom,#00f0ff,#00f0ff_10px,transparent_10px,transparent_20px)] md:bg-[repeating-linear-gradient(to_right,#4DB7F7,#4DB7F7_10px,transparent_10px,transparent_20px)] animate-[blinkMoveVertical_2s_linear_infinite] md:animate-[blinkMove_2s_linear_infinite] z-0" />
                    
                    {educationData.map((edu, index) => (
                        <div key={index} className="relative min-w-[200px] h-[160px] animate-[horizontalFloat_4s_ease-in-out_infinite] my-[70px] md:my-0">
                            <img src={edu.planet} alt={edu.title} className="w-[300px] h-[300px] rounded-full border-2 border-white shadow-[0_0_15px_4px_rgba(77,183,247,0.4)] relative z-10" />
                            <div className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 p-2 bg-[rgba(51,57,56,0.744)] rounded-full text-[12px] w-[300px] h-[300px] flex items-center justify-center">
                                <div className="p-5 mt-10">
                                    <h3 className="text-[20px] text-white mb-1">{edu.title}</h3>
                                    <p className="text-[18px] m-0 mb-1">{edu.institution}</p>
                                    <p className="text-[14px] text-[#dfdfe1] m-0">{edu.location}</p>
                                    <p className="text-[14px] text-[#dfdfe1] m-0">{edu.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
