import React from "react";
import html from "../Helpers/icons/html (1).png";
import css from "../Helpers/icons/css (1).png";
import react from "../Helpers/icons/react (1).png";
import js from "../Helpers/icons/javascript (2).png";
import github from "../Helpers/icons/github (1).png";
// import ex from "../Helpers/icons/";
import node from "../Helpers/icons/nodejs (1).png";
// import bts from "../Helpers/icons"
import ts from "../Helpers/icons/icons8-typescript-48.png";
import mui from "../Helpers/icons/material-ui.png";
import red from "../Helpers/icons/material-ui.png";

const Experience = () => {
  const experience = [
    {
      title: "Front-End Developer",
      items: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "Javascript",
        },
        {
          id: 4,
          title: "React",
        },
        {
          id: 5,
          title: "Responsive/Adaptive design",
        },
        {
          id: 6,
          title: "Redux Toolkit",
        },
        {
          id: 7,
          title: "TypeScript",
        },
        {
          id: 8,
          title: "Bootstrap",
        },
        {
          id: 9,
          title: "Parcel",
        },
        {
          id: 10,
          title: "Webpack",
        },
        {
          id: 11,
          title: "REST API",
        },
        {
          id: 12,
          title: "REST API",
        },
        {
          id: 13,
          title: "Git",
        },
        {
          id: 14,
          title: "GitHub",
        },
      ],
    },
    {
      title: "Back-End Developer",
      items: [
        {
          id: 1,
          title: "Node Js",
        },
        {
          id: 2,
          title: "Express Js",
        },
        {
          id: 3,
          title: "MongoDB",
        },
        {
          id: 4,
          title: "FastApi",
        },
      ],
    },
  ];

  const allImgs = [html, css, react, js, github, node, ts, mui, red];

  return (
    <section id="experience">
      <div
        className="title"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        <h2 className="title-h2">What Skills I Have</h2>
      </div>

      <div className="experience-container">
        {experience.map(({ title, items }) => (
          <div key={title} className="experience-item">
            <h2 className="experience-title">{title}</h2>
            <div className="experience-item-container">
              {items.map(({ id, title, level }) => (
                <>
                  <div className="feature">
                    <div className="feature-inner">
                      <h3>{title}</h3>
                      <p>{level}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="slider">
        <div className="slide-track">
          {allImgs.map((item, i) => (
            <div className="slide" key={i}>
              <img src={item} alt="item" height={100} width={250} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
