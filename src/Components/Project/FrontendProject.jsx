import ProjectCard from "./ProjectCard";
import "./Project.css";
import {projects} from '../../constansts.js';


function FrontendProject() {

  return (
    <section className="project" id="project">
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}

      {/* <img className="background-image-right" src={""}></img> */}
    </section>
  );
}

export default FrontendProject;
