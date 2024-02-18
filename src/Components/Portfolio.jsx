import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const data = [
    {
      name: "",
      des: "",
      live: "",
      github: "",
      shot: "*.png",
    },
    {
      name: "",
      des: "",
      live: "",
      github: "",
      shot: "",
    },
    {
      name: "",
      des: "",
      live: "",
      github: "",
      shot: "",
    },
    {
      name: "",
      des: "",
      live: "",
      github: "",
      shot: "",
    },
    {
      name: "Phonebook",
      des: "Adaptive application. Position: developer. I created the project using React and the Redux Toolkit.",
      live: "https://vitalii-malyk.github.io/goit-react-hw-08-phonebook/",
      github: "https://github.com/Vitalii-Malyk/goit-react-hw-08-phonebook",
      shot: "",
    },
    {
      name: "Film library",
      des: "Adaptive application. Position: developer. I created a project using React and and hooks.",
      live: "https://vitalii-malyk.github.io/goit-react-hw-05-movies/",
      github: "https://github.com/Vitalii-Malyk/goit-react-hw-05-movies",
      shot: "",
    },
    {
      name: "TastyTreats",
      des: "Adaptive site layout on vanilla JavaScript. Position: developer.",
      live: "https://devmasterx.github.io/project-TEAM-JS-2023/",
      github: "https://github.com/DevMasterX/project-TEAM-JS-2023",
      shot: "",
    },
    {
      name: "Wristwatch",
      des: "Responsive layout website. Position: Scrum Master, developer. We created a project on Github, checked for assembly and site errors.",
      live: "https://vitiukvv.github.io/project-wristwatch/",
      github: "https://github.com/VitiukVV/project-wristwatch",
      shot: "",
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2>My Portfolio</h2>
        <h4>Some of my works</h4>
      </div>

      <div className="portfolio-content">
        {data.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
