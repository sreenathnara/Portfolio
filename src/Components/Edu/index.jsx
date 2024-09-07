import { education } from "../../constansts";
import React from "react";
// import "./Experience.css";
import { Box } from "@mui/material";
import "../Experience/Experience.css";

const EduCard = ({ experience }) => {
  return (
    <div className="Card">
      <div className="top">
        
        <img
          className="image"
          style={{ background: "white" }}
          src={experience.img}
          alt=""
        />
        <div className="body">
          <h6>{experience.company} </h6>
          <div className="company">
            <span>{experience.degree} ({experience.grade})</span>
            <span className="date" style={{}}>
              {experience.date}
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const Edu = () => {
  return (
    <div id="maineducation" className="eduexp">
            <h1 className="title">Education</h1>
      <div id="mainexperience" className="education">
        <div id="experience" className="container">
          <div className="wrapper">
            {/* <div className="title">Experience</div> */}

            <div className="timelineSection">
              {/* <Timeline> */}
              {education.map((experience, index) => (
                <Box>
                  <EduCard sx={{ py: "12px", px: 2 }} experience={experience} />
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;
