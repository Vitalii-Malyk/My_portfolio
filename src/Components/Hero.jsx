import React from "react";
import hero from "../Helpers/images/hero.svg";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h4>Hello</h4>
        <h1>
          I'm Mal<span>yk</span> <br /> Vital<span>ii</span>
        </h1>
        <h3>Front End Developer</h3>
        <a
          href={require("../Helpers/data/Vitalii_Malyk_developer.pdf")}
          download
          className="btn"
        >
          Download CV
        </a>
      </div>
      <img className="hi" src={hero} alt="hi" width={510} height={510} />
    </section>
  );
};

export default Hero;
