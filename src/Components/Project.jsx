import React, { useState } from "react";

const Project = ({ item }) => {
  const [star, setStar] = useState(false);
  return (
    <li className="row">
      <img src={item.shot} alt="#" />
      <div className="main-row">
        <div className="row-text">
          <h3>{item.name}</h3>
        </div>
        <div className="row-icon" onClick={() => setStar((prev) => !prev)}>
          {star ? (
            <i className="bx bx-heart" style={{ color: "red" }}></i>
          ) : (
            <i className="bx bx-heart"></i>
          )}
        </div>
      </div>
      <h6>{item.des}</h6>
      <div
        style={{
          diplay: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "25px",
        }}
      >
        <a
          href={item.github}
          className="btn"
          target="blank"
          style={{
            marginRight: "20px",
            backgroundColor: "grey",
            border: "none",
          }}
        >
          Github
        </a>
        <a href={item.live} className="btn" target="blank">
          Live
        </a>
      </div>
    </li>
  );
};

export default Project;
