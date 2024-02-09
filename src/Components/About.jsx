import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="#" />
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
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Vitalii-Malyk" target="blank">
            <i className="bx bxl-github"></i>
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
