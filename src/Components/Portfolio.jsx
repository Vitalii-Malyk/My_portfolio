import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const data = [
    {
      name: "PowerPulse",
      des: "An application for personalized diet adjustment based on the user's physical characteristics and lifestyle.",
      live: "https://powerpulse-fitness.netlify.app/welcome",
      github: "https://github.com/Robertw8/powerpulse",
      shot: "https://res.cloudinary.com/dlhwk4nof/image/upload/v1708374144/PowerPulse_stsehw.png",
    },
    {
      name: "Phonebook",
      des: "Adaptive application. Position: developer. I created the project using React and the Redux Toolkit.",
      live: "https://vitalii-malyk.github.io/goit-react-hw-08-phonebook/",
      github: "https://github.com/Vitalii-Malyk/goit-react-hw-08-phonebook",
      shot: "https://res.cloudinary.com/dlhwk4nof/image/upload/v1708374144/telefon-bgc_mdjyvd.jpg",
    },
    {
      name: "Film library",
      des: "Adaptive application. Position: developer. I created a project using React and and hooks.",
      live: "https://vitalii-malyk.github.io/goit-react-hw-05-movies/",
      github: "https://github.com/Vitalii-Malyk/goit-react-hw-05-movies",
      shot: "https://res.cloudinary.com/dlhwk4nof/image/upload/v1708374145/FilmLibrary_bj1cbw.png",
    },
    {
      name: "TastyTreats",
      des: "Responsive site layout for tasty treats in vanilla JavaScript. Position: developer.",
      live: "https://devmasterx.github.io/project-TEAM-JS-2023/",
      github: "https://github.com/DevMasterX/project-TEAM-JS-2023",
      shot: "https://res.cloudinary.com/dlhwk4nof/image/upload/v1708374145/TastyTreats_c6oc5v.png",
    },
    {
      name: "Wristwatch",
      des: "Responsive site layout for selling wristwatches. Position: Scrum Master, developer.",
      live: "https://vitiukvv.github.io/project-wristwatch/",
      github: "https://github.com/VitiukVV/project-wristwatch",
      shot: "https://res.cloudinary.com/dlhwk4nof/image/upload/v1708374146/Wristwatch_aitetu.png",
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2>My Portfolio</h2>
        <h4>Some of my works</h4>
      </div>

      <ul className="portfolio-content">
        {data.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
