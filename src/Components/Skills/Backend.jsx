import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiMongoose, SiMongodb } from "react-icons/si";
function Backend() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 200 },
      items: 3,
    },
  };

  return (
    <div className="skill-container">
      <h2>Backend</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="item">
          <FaNode className="icon" size={"150px"} />

          <h1>node.js</h1>
        </div>
        <div className="item">
          <SiExpress className="icon" size={"150px"} />

          <h1>express.js</h1>
        </div>
        <div className="item">
          <SiMongodb className="icon" size={"150px"} />

          <h1>mongoDB</h1>
        </div>
        <div className="item">
          <SiMongoose className="icon" size={"150px"} />

          <h1>mongoose</h1>
        </div>
      </Carousel>
    </div>
  );
}

export default Backend;
