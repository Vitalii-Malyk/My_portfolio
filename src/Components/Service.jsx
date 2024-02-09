import React from "react";

const Service = () => {
  return (
    <section className="services" id="services">
      <div className="main-text">
        <h2>My Services</h2>
        <h4>Frontend and backend: the connection that creates innovation</h4>
      </div>

      <div className="services-content">
        <div className="box">
          <h3>Frontend Developer</h3>
          <p>
            Using tools such as React, Bootstrap, Material UI and style
            components, I efficiently create and maintain user interfaces that
            are characterized by high performance and ease of use. CSS
            extensions, such as SASS, help increase the modularity and power of
            the language, which contributes to the rapid and efficient
            development of complex interfaces, and the Redux Toolkit provides
            convenient and transparent management of the state of the
            application, which allows you to achieve excellent results at work.
          </p>
        </div>

        <div className="box">
          <h3>Backend Developer</h3>
          <p>
            Focusing on backend development, I prefer databases, server logic,
            application programming interfaces (APIs), and server architecture
            and configuration. Using frameworks such as Express.js and FastAPI
            for server and API development, and Mongoose for database
            management, particularly MongoDB, I keep my projects running
            efficiently. Using Node.js allows me to implement powerful and
            scalable server applications with great efficiency and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Service;
