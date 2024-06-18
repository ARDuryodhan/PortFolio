import React, { useEffect } from "react";
import AOS from "aos";
import { Row, Col, Card } from "react-bootstrap";
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/cssIcon.png";
import jsIcon from "../assets/jsIcon.png";
import reactIcon from "../assets/reactIcon.png";
import jqueryIcon from "../assets/jqueyIcon.png"; // Corrected typo
import mongodbIcon from "../assets/mongodbIcon.png";
import bootstrapIcon from "../assets/bootstrapIcon.png";
import jsxIcon from "../assets/jsxIcon.png";

function Skills() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div id="skill_container" className="container">
      <h1 className="title text-center my-4">Skills</h1>
      <Row className="justify-content-center align-items-center">
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={htmlIcon} alt="HTML" className="skill-icon" />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={cssIcon} alt="CSS" className="skill-icon" />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={jsIcon} alt="JavaScript" className="skill-icon" />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={reactIcon} alt="ReactJS" className="skill-icon" />
            <Card.Body>
              <Card.Title>ReactJS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={jqueryIcon} alt="jQuery" className="skill-icon" />
            <Card.Body>
              <Card.Title>jQuery</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img
              src={bootstrapIcon}
              alt="Bootstrap"
              className="skill-icon"
            />
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={jsxIcon} alt="JSX" className="skill-icon" />
            <Card.Body>
              <Card.Title>JSX</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="mb-4"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Card className="card text-center">
            <Card.Img src={mongodbIcon} alt="MongoDB" className="skill-icon" />
            <Card.Body>
              <Card.Title>MongoDB</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
