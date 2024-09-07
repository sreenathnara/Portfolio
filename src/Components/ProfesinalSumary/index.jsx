// import React from "react";
// import "./Experience.css";
// import SchoolIcon from "@mui/icons-material/School";
// import educations from "../Education/educations";
// import Education from "../Education/Education";
// import { experiences } from './constanst';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import ExperienceCard from './ExperienceCard';
import { ProfessinalSummaryPoints } from '../../constansts';
import './ProfesinalSumary.css';
import { Box } from "@mui/material";

function ProfesinalSummary(edu) {
  return (
    <div id="mainexperience" className="summary">
        <h1 className="title">Professinal Summary</h1>
        <div className='summary-des'>
        <ul>
        {ProfessinalSummaryPoints.map((val, i) => <li className='des' key={i}>{val}</li>)}
        </ul>
        </div>
        
    </div>
  );
}

export default ProfesinalSummary;
