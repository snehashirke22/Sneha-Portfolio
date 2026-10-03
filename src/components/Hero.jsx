import React from "react";
import heroImage from "../assets/hero.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-[100px] py-[80px] h-auto md:h-screen max-w-[1500px] mx-auto mt-[15%] md:mt-[10%] xl:mt-[4%] ml-[18%] md:ml-auto">
            <div className="max-w-[800px] flex-wrap w-[410px] md:w-auto">
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
                    ⚡ Software Engineer at <span className="text-primary">Accenture</span>
                </p>
              
                <a href="https://drive.google.com/file/d/1zUn_qaOxlv77CUyZdf90ToBVX5_3ZwXT/view?usp=drive_link" target="_blank" download className="mt-10 inline-flex px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white no-underline justify-center items-center rounded-[10px] font-medium text-lg gap-1.5 shadow-[0_0_15px_rgba(167,139,250,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]"><IoMdDownload size={18} />
                    Download Resume
                </a>
            </div>
            <div className="mt-[10%] md:mt-0">
                <img src={heroImage} alt="Sneha" className="w-[420px] md:w-[600px] h-auto object-contain rounded-full drop-shadow-[0_0_40px_rgba(0,174,255,0.35)] mix-blend-lighten animate-[float_3s_ease-in-out_infinite]" />
            </div>
        </section>
    );
};

export default Hero;
