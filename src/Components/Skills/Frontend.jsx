import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { FaGithub, FaJenkins, FaDocker, FaAws } from "react-icons/fa";
import {
  SiMicrosoftazure,
  SiApachemaven,
  SiSonarqube,
  SiAzuredevops,
  SiKubernetes,
  SiAnsible,
  SiTerraform,
} from "react-icons/si";

function Frontend() {
  const items = [
    {
      icon: <SiMicrosoftazure className="icon" size={"150px"} />,
      label: "Microsoft Azure",
    },
    { icon: <FaGithub className="icon" size={"150px"} />, label: "Github" },
    { icon: <SiApachemaven className="icon" size={"150px"} />, label: "Maven" },
    {
      icon: <SiSonarqube className="icon" size={"150px"} />,
      label: "Sonar Qube",
    },
    {
      icon: <SiAzuredevops className="icon" size={"150px"} />,
      label: "Azure Devops",
    },
    { icon: <FaJenkins className="icon" size={"150px"} />, label: "Jenkins" },
    { icon: <FaDocker className="icon" size={"150px"} />, label: "Docker" },
    {
      icon: <SiKubernetes className="icon" size={"150px"} />,
      label: "Kubernetes",
    },
    { icon: <FaAws className="icon" size={"150px"} />, label: "Aws" },
    { icon: <SiAnsible className="icon" size={"150px"} />, label: "Ansible" },
    {
      icon: <SiTerraform className="icon" size={"150px"} />,
      label: "Terraform",
    },
  ];

  const totalItems = items.length;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: Math.min(5, totalItems), // Ensure no more items are displayed than available
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: Math.min(3, totalItems),
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: Math.min(2, totalItems),
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: Math.min(1, totalItems),
    },
  };

  const extendedItems = [...items, ...items.slice(0, responsive.desktop.items)];
  
  return (
    <div className="skill-container">
      <Carousel
        swipeable={true}
        draggable={false}
        infiniteLoop={true}
        slidesToSlide={Math.min(1, totalItems)}
        responsive={responsive}
        infinite={
          totalItems >
          Math.max(
            responsive.superLargeDesktop.items,
            responsive.desktop.items,
            responsive.tablet.items,
            responsive.mobile.items
          )
        }
        autoPlay={totalItems > 1} // Only autoplay if there is more than one item
        autoPlaySpeed={2000}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
         // Show dots only if there are multiple items
        arrows={totalItems > 1} // Show arrows only if there are multiple items
      >
        {extendedItems.map((item, index) => (
          <div className="item" key={index}>
            {item.icon}
            <h1>{item.label}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Frontend;
