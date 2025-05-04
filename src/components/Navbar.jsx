import React, {useState} from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo_sneha.jpg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {

  const [isOpen, setIsOpen]  = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="logo"
          className="navbar-logo"
        />
        <span className="navbar-title">Sneha's Portfolio</span>
      </div>

      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
      <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
<div className="menu-icon" onClick={toggleMenu}>
  {isOpen ? <FiX /> : <FiMenu/>}
</div>
    </div>
  );
};

export default Navbar;
