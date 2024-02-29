import React from "react";
import { ReactComponent as Logo } from "../Helpers/icons/mdi--application-braces-outline.svg";

const Header = () => {
  return (
    <header>
      <a href="#home" className="logo">
        <Logo />
      </a>
      <ul className="navbar">
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
    </header>
  );
};

export default Header;
