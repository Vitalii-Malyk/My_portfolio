import React from "react";
import { ReactComponent as LinkedInn } from "../Helpers/icons/mdi--linkedin.svg";
import { ReactComponent as GitHub } from "../Helpers/icons/bxl--github.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img
          src="https://res.cloudinary.com/dlhwk4nof/image/upload/v1708379204/photo1669630193_e7p4sj.jpg"
          alt="foto"
        />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <h4>Hi, Im Here To Help Your Next Project</h4>
        <p>
          A talented beginner web developer with a wide range of programming
          languages and design tools. Ability to create clean, secure code based
          on individual client needs with innovative, user-friendly design.
          Focused on customer satisfaction.
        </p>
        <div
          className="contact-icons"
          style={{ marginTop: "-15px", marginBottom: "15px" }}
        >
          <a href="www.linkedin.com/in/vitalii-malyk" target="blank">
            <i className="bx bxl-linkedin">
              <LinkedInn />
            </i>
          </a>
          <a href="https://github.com/Vitalii-Malyk" target="blank">
            <i className="bx bxl-github">
              <GitHub />
            </i>
          </a>
        </div>
        <div className="about-gri">
          <div className="about-in">
            <h5>1. Effective communication</h5>
          </div>
          <div className="about-in">
            <h5>2. Сreative ideas</h5>
          </div>
          <div className="about-in">
            <h5>3. Analytical approach</h5>
          </div>
          <div className="about-in">
            <h5>4. High Quality</h5>
          </div>
          <div className="about-in">
            <h5>5. Technological competence</h5>
          </div>
        </div>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
