import React from "react";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import { profileDetails } from "../../constansts";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-brand">
          <Avatar className="avatar" alt="It's me" src={profileDetails.profilePicUrl} />
          <h1 className="nav-title">{profileDetails.profileName}
          </h1>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <a href="#mainhome">Home</a>
            <a href="#mainexperience">Experience</a>
            <a href="#maineducation">Education</a>
            <a href="#mainskill">Skills</a>
            <a href="#mainproject">Projects</a>
          </ul>
        </div>
        <button className="nav-button button">
          <a href="#maincontact">Let's CONNECT</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
