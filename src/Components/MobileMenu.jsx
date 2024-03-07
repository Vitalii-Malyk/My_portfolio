import React, { useState } from "react";
import { ReactComponent as Logo } from "../Helpers/icons/burger-menu.svg";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        <Logo />
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <div className="wrapMob">
          <ul className="navbarMob">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">My Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
