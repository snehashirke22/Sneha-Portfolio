import React from "react";
import "../styles/Contact.css";
import { FaUserAstronaut } from "react-icons/fa6";
import ufo3 from "../assets/ufo3.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <h2 className="heading">Contact</h2>
                <div className="badge">
                    <FaUserAstronaut  className="badge-icon" />
                    <span>"Connect with me to roam the universe - board this galaxy rover."</span>
                </div>
                <p className="subtext">Reach me out at <span>rajeshirkesneha.work@gmail.com</span> ✉️</p>
            </div>

            <div className="ufo-contact">
                <div className="ufo-wrapper">
                    <img src={ufo3} alt="UFO" className="ufo" />
                    <div className="ufo-beam"></div>
                </div>
                <div className="contact-icons">
                    <div className="icon-block">
                        <a href="https://github.com/snehashirke22" target="_blank" rel="noopener noreferrer" className="icon-box">
                            <FaGithub />
                        </a>
                        <span className="label">GitHub</span>
                    </div>
                    <div className="icon-block">
                        <a href="https://www.linkedin.com/in/sneha-rajeshirke-44827424b/" target="_blank" rel="noopener noreferrer" className="icon-box">
                            <FaLinkedin />
                        </a>
                        <span className="label">LinkedIn</span>
                    </div>
                    <div className="icon-block">
                        <a href="mailto:rajeshirkesneha.work@gmail.com" className="icon-box">
                            <FaEnvelope />
                        </a>
                        <span className="label">Email</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
