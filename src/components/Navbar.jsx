import React, {useState} from "react";
import logo from "../assets/logo_sneha.jpg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen]  = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between md:justify-center md:gap-[25%] lg:gap-[40%] backdrop-blur-md bg-black/20 border-b border-white/10 shadow-[0_0_20px_4px_rgba(66,182,193,0.3)] z-50 mx-auto">
      <div className="flex items-center gap-2 ml-0 md:ml-1/4">
        <img
          src={logo}
          alt="logo"
          className="w-[50px] h-[50px] rounded-full object-cover bg-transparent"
        />
        <span className="text-white text-[19.2px] font-bold">Sneha's Portfolio</span>
      </div>

      <div className={`fixed top-full right-0 w-full bg-bg-dark flex-col items-center justify-center gap-12 pb-5 md:static md:w-auto md:bg-transparent md:flex-row md:flex md:gap-8 md:border md:border-primary md:px-8 md:py-2 md:rounded-full md:mr-10 ${isOpen ? "flex" : "hidden"}`}>
        <a href="#skills" onClick={() => setIsOpen(false)} className="text-white no-underline font-medium text-base hover:text-primary transition-colors">Skills</a>
        <a href="#experience" onClick={() => setIsOpen(false)} className="text-white no-underline font-medium text-base hover:text-primary transition-colors">Experience</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-white no-underline font-medium text-base hover:text-primary transition-colors">Projects</a>
        <a href="#education" onClick={() => setIsOpen(false)} className="text-white no-underline font-medium text-base hover:text-primary transition-colors">Education</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-white no-underline font-medium text-base hover:text-primary transition-colors">Contact</a>
      </div>

      <div className="block md:hidden text-[28px] text-white cursor-pointer relative z-[1101]" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu/>}
      </div>
    </div>
  );
};

export default Navbar;
