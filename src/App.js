import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Experience />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
