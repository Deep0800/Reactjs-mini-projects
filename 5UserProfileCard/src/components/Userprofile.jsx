import React from "react";
import profile_icon from "../assets/449271601_1240160314033967_3134659330485956020_n.jpg";
import "./userProfile.css";

function Userprofile() {
  return (
    <div className="upc">
      <div className="gradient"></div>

      {/* Profile Image */}
      <div className="profile-pic">
        <img src={profile_icon} alt="Deep Gandhi" />
      </div>

      {/* Card Body */}
      <div className="profile_down">
        <div className="profile-title">Deep Gandhi</div>
        <div className="profile-description">
          Hi, I’m Deep Gandhi — a MERN stack developer with a passion for
          building sleek, scalable web applications. From crafting responsive
          frontend with React to designing robust APIs with Node.js and Express,
          I love bringing ideas to life through code. MongoDB is my go-to for
          managing data, and I'm always exploring new tech to stay ahead of the
          curve. Let’s build something awesome!
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
