import React from "react";
import html from "../Helpers/data/logos/html.svg";
import css from "../Helpers/data/logos/css.svg";
import react from "../Helpers/data/logos/react.svg";
import github from "../Helpers/data/logos/github.svg";
import git from "../Helpers/data/logos/git.svg";
import js from "../Helpers/data/logos/js.svg";
import node from "../Helpers/data/logos/nodejs.svg";
import mui from "../Helpers/data/logos/material-ui.svg";
import ts from "../Helpers/data/logos/typescript.svg";
import mongodb from "../Helpers/data/logos/mongodb.svg";
import bootstrap from "../Helpers/data/logos/bootstrap.svg";
import redux from "../Helpers/data/logos/redux.svg";
import webpack from "../Helpers/data/logos/webpack.svg";
import figma from "../Helpers/data/logos/figma.svg";
import fastApi from "../Helpers/data/logos/fastapi.svg";
import canva from "../Helpers/data/logos/canva.svg";
import autoCAD from "../Helpers/data/logos/autocad.svg";

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

  const allImgs = [
    html,
    css,
    js,
    react,
    node,
    ts,
    redux,
    fastApi,
    github,
    git,
    mui,
    bootstrap,
    mongodb,
    webpack,
    figma,
    canva,
    autoCAD,
  ];

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
