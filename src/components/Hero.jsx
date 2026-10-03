import React from "react";
import heroImage from "../assets/hero.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-[50px] lg:gap-[120px] px-8 md:px-[50px] pt-[100px] md:pt-[120px] pb-[80px] h-auto md:min-h-screen max-w-[1500px] mx-auto ml-[18%] md:ml-auto">
            <div className="w-full max-w-[700px] flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-primary bg-white/20 rounded-full text-white text-sm mb-4 font-medium shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                    <IoCodeSlash className="text-white text-base" />
                    <span>Always Learning. Always Growing.</span>
                </div>

                <p className="text-2xl font-semibold mb-0"><span className="text-primary">Hey there!, I'm-</span></p>
                <h1 className="text-[60px] md:text-[70px] font-black my-[10px]">Sneha Rajeshirke<span className="text-white">.</span></h1>
                <p className="text-[22px] md:text-[26px] font-normal my-5 mb-10">
                    <strong>Software Engineer.</strong> <span className="text-[#8F9094]"> A passionate developer interested in building scalable applications.</span>
                </p>
                <p className="text-base md:text-xl text-[#c1c1c1] m-0">🚀 Currently specializing in Frontend (React / Next.js)        </p>
                <p className="text-base md:text-xl text-[#c1c1c1] m-0">
                    ⚡ Junior Software Engineer at <span className="text-primary">TapFin</span>
                </p>
              
                <a href="https://drive.google.com/file/d/138PUKfv8J6VM0ju714AuUSNkFuJ9fHhd/view?usp=sharing" target="_blank" download className="mt-10 inline-flex px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white no-underline justify-center items-center rounded-[10px] font-medium text-lg gap-1.5 shadow-[0_0_15px_rgba(167,139,250,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]"><IoMdDownload size={18} />
                    Download Resume
                </a>
            </div>
            <div className="mt-[15%] md:mt-0 relative group flex justify-center items-center w-[90vw] max-w-[380px] md:max-w-none md:w-[550px] aspect-square">
                {/* Outer glowing animated ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-[#b600ff] rounded-full animate-spin blur-[30px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 [animation-duration:8s]"></div>
                {/* Inner rotating gradient border */}
                <div className="absolute inset-[-6px] bg-gradient-to-tr from-[#b600ff] via-primary to-secondary rounded-full animate-spin [animation-duration:10s] opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                
                <img src={heroImage} alt="Sneha" className="relative w-full h-full object-cover rounded-full animate-[float_4s_ease-in-out_infinite] z-10 transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
        </section>
    );
};

export default Hero;
