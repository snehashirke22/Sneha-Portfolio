import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";



const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="badge">
                    <IoCodeSlash className="badge-icon" />
                    <span>Always Learning. Always Growing.</span>
                </div>

                <p className="greeting"><span>Hey there!, I'm-</span></p>
                <h1 className="name">Sneha Rajeshirke<span className="dot">.</span></h1>
                <p className="role">
                    <strong>Software Engineer.</strong> <span style={{ color: "#8F9094" }}> A passionate developer interested in building scalable applications.</span>
                </p>
                <p className="highlight">🚀 Currently specializing in Frontend (React / Next.js)        </p>
                <p className="highlight">
                    ⚡ Software Engineer at <span className="company">Accenture</span>
                </p>
              
                <a href="https://drive.google.com/file/d/1zUn_qaOxlv77CUyZdf90ToBVX5_3ZwXT/view?usp=drive_link" target="_blank" download className="download-btn"><IoMdDownload size={18} />
                    Download Resume
                </a>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt="Sneha" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
