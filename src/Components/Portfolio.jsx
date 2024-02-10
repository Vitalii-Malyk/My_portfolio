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
      name: "",
      des: "",
      live: "",
      github: "",
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
