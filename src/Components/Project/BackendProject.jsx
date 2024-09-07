import ProjectCard from "./ProjectCard";
import "./Project.css";
import memory from "../../img/memories.png";

function BackendProject() {
  const projects = [
    {
      title: "Developer notes ",
      description:
        "An interactive website where you can use for notes taking. When you compose a note, it will be saved to home page as short summary.Through clicking it, you can see the whole notes.",
      tech: "HTML, CSS, NODE, EXPRESS, EJS",
      imgUrl: memory,
      code: "https://github.com/VijayaragavanS1999/My-memories-BackendProject",
      demo: " https://damp-plains-84221.herokuapp.com/",
    },
  ];

  return (
    <section className="project" id="project">
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}
    </section>
  );
}

export default BackendProject;
