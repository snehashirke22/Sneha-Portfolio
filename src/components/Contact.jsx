import React from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import ufo3 from "../assets/ufo3.png";
import { contacts } from "../constants";

const Contact = () => {
    return (
        <>
            <div className="text-center text-white mt-[20%] md:mt-[15%] ml-[45px] md:ml-0 w-full md:w-auto flex flex-col items-center justify-center">
                <h2 className="text-[40px] mb-2.5 text-primary font-bold">Contact</h2>
                <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-primary bg-white/20 rounded-full text-white text-sm mb-4 font-medium shadow-[0_0_8px_var(--color-primary)] transition-all duration-300">
                    <FaUserAstronaut  className="text-white text-base" />
                    <span>"Connect with me to roam the universe - board this galaxy rover."</span>
                </div>
                <p className="text-[17.6px] mb-10 text-[#c1c1c1]">Reach me out at <a href="mailto:rajeshirkesneha.work@gmail.com" className="text-primary hover:underline transition-all duration-300">rajeshirkesneha.work@gmail.com</a> ✉️</p>
            </div>

            <div className="relative text-center mt-8">
                <div className="relative inline-block">
                    <img src={ufo3} alt="UFO" className="w-[350px] md:w-[650px] z-10 relative animate-[float_3s_ease-in-out_infinite] ml-[60px] md:ml-0" />
                    <div className="absolute top-[80%] left-[57%] md:left-1/2 -translate-x-1/2 w-[400px] md:w-[650px] h-[600px] md:h-[100px] bg-[radial-gradient(ellipse_at_center,rgba(63,172,215,0.874),transparent_70%)] [clip-path:polygon(50%_0%,100%_100%,0%_100%)] z-0 animate-[beamGlow_2s_infinite_alternate]"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-[48px] mt-6 flex-wrap ml-[90px] md:ml-0">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="flex flex-col items-center z-10">
                            <a href={contact.link} target={contact.link.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer" className="text-[40px] text-primary p-4 rounded-[20px] border-2 border-primary shadow-[0_0_15px_4px_rgba(77,183,247,0.8)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_8px_rgba(77,183,247,0.7)] flex justify-center items-center">
                                {contact.icon}
                            </a>
                            <span className="mt-2 text-white text-base pointer-events-none">{contact.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Contact;
