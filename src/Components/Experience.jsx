import React from "react";
import html from "../Helpers/icons/html&css.png";
import react from "../Helpers/icons/react (2).png";
import js from "../Helpers/icons/icons8-typescript-48.png";
import github from "../Helpers/icons/git (1).png";
import node from "../Helpers/icons/nodeimg.png";
import ts from "../Helpers/icons/icons8-typescript-48.png";
import mui from "../Helpers/icons/material-ui.png";

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
          title: "Redux Toolkit",
        },
        {
          id: 6,
          title: "TypeScript",
        },
        {
          id: 7,
          title: "Bootstrap",
        },
        {
          id: 8,
          title: "Material-ui",
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
          title: "REST APIs",
        },
        {
          id: 12,
          title: "Git",
        },
        {
          id: 13,
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
          title: "TypeScript",
        },
        {
          id: 4,
          title: "Express Js",
        },
        {
          id: 5,
          title: "Mongoose",
        },
        {
          id: 6,
          title: "MongoDB",
        },
        {
          id: 7,
          title: "FastApi",
        },
        {
          id: 8,
          title: "MySQL",
        },
      ],
    },
  ];

  const allImgs = [html, js, react, ts, node, mui, github];

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

      <ul className="experience-container">
        {experience.map(({ title, items }) => (
          <li key={title} className="experience-item">
            <h2 className="experience-title">{title}</h2>
            <ul className="experience-item-container">
              {items.map(({ id, title, level }) => (
                <li key={id}>
                  <div className="feature">
                    <div className="feature-inner">
                      <h3>{title}</h3>
                      <p>{level}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

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
