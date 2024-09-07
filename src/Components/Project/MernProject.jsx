import ProjectCard from "./ProjectCard";
import "./Project.css";
import myDairy from "../../img/Mydairy.png";
import crypto from "../../img/crypto.png";
import Socify from "../../img/socify.png";

function MernProject() {
  const projects = [
    {
      title: " Socify",
      description:
        "A full-stack platform which allows users to register, share thoughts and images, explore posts from others, and engage by following friends..",
      tech: "MERN - STACK",
      imgUrl: Socify,
      code: "https://github.com/VijayaragavanS1999/socify-Frontend",
      demo: "https://socify-app.onrender.com",
    },
    {
      title: "  Crypto Tracker ",
      description:
        "An interactive website where you can see the performance of  Cryptocurency market (coin price, volume, 24hr changes and market capital) and you can search a coin by using its name.",
      tech: "HTML, CSS, REACT",
      imgUrl: crypto,
      code: "https://github.com/VijayaragavanS1999/Cryto-tracker",
      demo: "https://crypto-market1999.netlify.app",
    },
  ];

  return (
    <section className="project" id="project">
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}

      <img className="background-image-right" src={""}></img>
    </section>
  );
}

export default MernProject;
