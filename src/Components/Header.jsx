import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src="#" alt="logo" />
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

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
