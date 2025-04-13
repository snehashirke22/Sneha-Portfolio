import React from "react";
import "../styles//Education.css";
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
        <section className="education-section">
            <h2 className="heading">Education</h2>
            <div className="badge">
                <MdSchool className="badge-icon" />
                <span>"The universe of learning starts here."</span>
            </div>
            <p className="subtext">My academic journey through school and college. 📚</p>
            <div className="education-container">
                <div className="space-path">
                    <div className="moving-dots" />
                    {educationData.map((edu, index) => (
                        <div key={index} className="planet-card">
                            <img src={edu.planet} alt={edu.title} className="planet-img" />
                            <div className="edu-info-bg">
                            <div className="edu-info">
                                <h3>{edu.title}</h3>
                                <p>{edu.institution}</p>
                                <p className="location">{edu.location}</p>
                                <p className="year">{edu.year}</p>
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
