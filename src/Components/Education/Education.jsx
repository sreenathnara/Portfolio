import React from "react";
import "./Education.css";
import SchoolIcon from "@mui/icons-material/School";

function Services(props) {
  return (
    <div id="maineducation" >
      <div className="title" style={{width:"175px"}}>Education</div>

      <div className="class">
        <span>
          <SchoolIcon className="edu-icon" style={{ marginRight: "10px", fontSize:"10px" }} />
          {"sdff"}
        </span>
        <span className="year" style={{ fontSize: "1rem", color: "#808080" }}>
          {"sd"}
        </span>
      </div>
      <p>{"sadf"}</p>
      <p>{"sdfsdf"}</p>
      <div className="grade">
        <span className="cgpa">{9.0}</span>
        <span
          className="percent"
          style={{
            fontWeight: "900",
            fontSize: "1.4rem",
            marginLeft: "0.7rem",
          }}
        >
          {props.mark}
        </span>
      </div>
    </div>
  );
}

export default Services;
