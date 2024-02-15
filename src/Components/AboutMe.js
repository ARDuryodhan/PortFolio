import React from "react";
import { Card } from "react-bootstrap";
import linkedinImg from "../assets/logolinkedin.png";
import twitterImg from "../assets/Twitter-logo.png";
import instaImg from "../assets/instaLogo.png";
import githublogo from "../assets/githublogo.png";
import whatsapplogo from "../assets/whatsapplogo.png";
// import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div id="about_container">
      <h2>About Me</h2>
      <div className="info-content">
        <p>
          Dedicated and adaptable fresher with 6 months hands-on experience in
          frontend engineering and application support. Completed a rigorous
          React Frontend Engineer Trainee program at Numetry Technologies, and
          have skills like React.JS, HTML, CSS, and Bootstrap while developing
          responsive interfaces for diverse projects. Led the frontend
          development for the "School_College" project, collaborating seamlessly
          with backend developers to ensure project cohesion. Previously,
          excelled as an Information Processing Specialist at Tata Consultancy
          Services, managing critical tasks within the DHL project and
          progressing to the role of Mentor, overseeing team operations and
          conducting audits for process efficiency. Skilled in troubleshooting
          and providing comprehensive support, with a proven track record of
          adaptability and innovation across various projects. Seeking
          opportunities to leverage skills in frontend development and
          application support to contribute effectively in a dynamic work
          environment.
        </p>
      </div>
      <div className="mid_container">
        <div className="container">
          <div className="exp">
            <h2>experience</h2>
            <div className="box">
              <small>September 2019- June 2022</small>
              <h3>Application Support Desk</h3>
              <p>Tata Consultancy Services </p>
            </div>
            <div className="box">
              <small>September 2023 - January 2024</small>
              <h3>Front-End Developer</h3>
              <p>Numetry Technology</p>
            </div>
          </div>
          <div className="edu">
            <h2>education</h2>
            <div className="box">
              <small>2015-2018</small>
              <h3>Bachelor of Business Administration</h3>
              <p>Nagpur University</p>
            </div>
            <div className="box">
              <h2>Course</h2>
              <small>August 2022 -December 2022</small>
              <p>
                <i>Frontend Development</i>
              </p>
              <p>
                <i>React JS </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="social_linkscards">
        <a href="https://www.linkedin.com/in/arduryodhan009" target="_blank" rel="noopener noreferrer">
          <Card>
            <Card.Img variant="top" src={linkedinImg} />
            <Card.Body>
              <h4>Linkedin</h4>
            </Card.Body>
          </Card>
        </a>
        <a href="https://twitter.com/AdityaDuryodha1" target="_blank" rel="noopener noreferrer">
          <Card>
            <Card.Img variant="top" src={twitterImg} />
            <Card.Body>
              <h4>Twitter/X</h4>
            </Card.Body>
          </Card>
        </a>
        <a href="https://www.instagram.com/ar_duryodhan" target="_blank" rel="noopener noreferrer">
          <Card>
            <Card.Img variant="top" src={instaImg} />
            <Card.Body>
              <h4>Instagram</h4>
            </Card.Body>
          </Card>
        </a>
        <a href="https://wa.me/9527874625" target="_blank" rel="noopener noreferrer">
          <Card>
            <Card.Img variant="top" src={whatsapplogo} />
            <Card.Body>
              <h4>Whatsapp</h4>
            </Card.Body>
          </Card>
        </a>
        <a href="https://github.com/ARDuryodhan" target="_blank" rel="noopener noreferrer">
          <Card>
            <Card.Img variant="top" src={githublogo} />
            <Card.Body>
              <h4>GitHub</h4>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
