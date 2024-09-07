import React from "react";
import "./Experience.css";

import { experiences } from '../../constansts';

import ExperienceCard from './ExperienceCard';
import { Box } from "@mui/material";

function Services(edu) {
  return (
    <div className="eduexp">
      <div id="mainexperience" className="education">
        <div id="experience" className="container">
          <div className="wrapper">
            <div className="title">Experience</div>

            <div className="timelineSection">
              {/* <Timeline> */}
                {experiences.map((experience, index) => (
                    <Box>
                    <ExperienceCard sx={{ py: '12px', px: 2 }} experience={experience} />
                    </Box>
                  // <TimelineItem>
                  //   {/* <TimelineSeparator>
                  //     <TimelineDot variant="outlined" color="secondary" />
                  //     {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                  //   </TimelineSeparator> */}
                  //   {/* <TimelineContent sx={{ py: '12px', px: 2 }}> */}
                  
                  //   {/* </TimelineContent> */}
                  // </TimelineItem>
                ))}
              {/* </Timeline> */}

            </div>
          </div>
        </div>
      </div>
      {/* <div className="eduDiv">

        <div id="maineducation" >
          <div className="title" style={{ width: "190px", marginBottom:"40px" }}>Education</div>
          {educations.map((edu) => (
            <>
              <div className="class">
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"10px", marginBottom:"0px"}}>
                  <SchoolIcon className="edu-icon" />
                  <span style={{fontSize:"18px"}}>{edu.title}</span>
                </div>
                <div className="year" style={{ marginLeft:"60px", fontSize:"15px"}}>
                  {edu.year}
                </div>
              </div>
              <p style={{fontSize:"16px"}}>{edu.where1}</p>
              <p style={{fontSize:"16px", marginTop:"2px"}}>{edu.where2}</p>
              <div className="grade" style={{marginTop:"3px"}}>
                <b style={{marginLeft:"0px", fontSize:"15px"}}>{edu.cgpa}</b>
                <b
                  style={{
                    fontWeight: "900",
                    fontSize: "0.8rem",
                    marginLeft:"2px"
                  }}
                >
                  {edu.mark}
                </b>
              </div>
            </>
          ))}
        </div>
      </div> */}

    </div>
  );
}

export default Services;
