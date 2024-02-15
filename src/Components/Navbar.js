import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile-img.png";
function Navbar() {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <div id="Navbar_container">
      <div className={`sidebar_container ${isCollapsed ? "collapsed" : ""}`}>
        <div className="menu_icon" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="sidebar_content">
          <Link to="/">
            <div className="sidebar_item" title="profile">
              <div className="personalInfo">
                <img
                  src={profileImg}
                  alt="personalImg"
                  className={isCollapsed ? "small-width" : ""}
                  style={{
                    width: isCollapsed ? "3rem" : "6rem",
                    ...(window.innerWidth <= 1200 &&
                      isCollapsed && {
                        width: "5rem",
                      }),
                  }}
                />

                {!isCollapsed && (
                  <>
                    <span className="name"> Aditya </span>
                    <span className="name">Duryodhan</span>
                  </>
                )}
              </div>
            </div>
          </Link>
          <Link to="/aboutme">
            <div className="sidebar_item" title="About Me">
              &nbsp;
              <i className="fa-solid fa-address-card"></i>
              {!isCollapsed && <span>&nbsp;About me</span>}
            </div>
          </Link>

          <Link to="/projects">
            <div className="sidebar_item" title="Resume">
              &nbsp;&nbsp;
              <i className="fa-solid fa-file">&nbsp;</i>
              {!isCollapsed && <span>Resume</span>}
            </div>
          </Link>

          <Link to="/projects">
            <div className="sidebar_item" title="Projects">
              <i className="fa-solid fa-laptop"></i>
              {!isCollapsed && <span>Projects</span>}
            </div>
          </Link>
          <Link to="/skills">
            <div className="sidebar_item" title="Skills">
              <i className="fa-solid fa-user-gear"></i>
              {!isCollapsed && <span>Skills</span>}
            </div>
          </Link>
          <Link to="/contact">
            <div className="sidebar_item" title="Contact Me">
              <i className="fa-solid fa-address-book"></i>
              {!isCollapsed && <span>Contact me</span>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
