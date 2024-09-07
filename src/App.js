import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import Education from "./Components/Education/Education";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import educations from "./Components/Education/educations";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import ProfesinalSummary from "./Components/ProfesinalSumary";
// import Services from "./Components/Education/Education";
import Edu from "./Components/Edu";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ProfesinalSummary />
      <Experience />
      <Edu />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
