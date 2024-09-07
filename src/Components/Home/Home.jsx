import React from "react";
import "./Home.css";
import Vijay from "../../img/vijay.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import { profileDetails } from "../../constansts";

function Home() {
  return (
    <div id="mainhome" className="home">
      <div className="home-left">
        <div className="home-text">
          <div className="home-title">
            <span className="span1">hey! I am </span>
            <span className="span2">{profileDetails.profileName}</span>
          </div>
          <h1>{profileDetails.designation}..</h1>
          <a target="_blank" rel="noreferrer"  href={profileDetails.resumeLink}>
            <button className="home-button button">My RESUME</button>
          </a>
        </div>

        <div className="home-icon">
          {/* <a href={profileDetails.gitHubUrl}>
            <GitHubIcon />
          </a> */}
          <a target="_blank" rel="noreferrer" href={profileDetails.linkdinUrl} >
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profileDetails.email}`}>
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img className="vijay" src={profileDetails.profilePicUrl} alt="profile-phot" />
        <div className="dev">
          <CodeIcon className="code-icon" />
          <h1>{profileDetails.designation}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
