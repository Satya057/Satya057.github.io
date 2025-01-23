import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./About.css";
import profile from "../assets/img/profile/profile.png";
const About = () => {
  return (
    <div className="bgi mar-container about-container">
      <Container className="about-container bgi" id="about">
        <Row>
          <Col>
            <h1>ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi">
        <Row className="about-container">
          <Col>
            <Image src={profile} rounded className="profile-image" />
          </Col>
          <Col>
            <div className="aobut-name">
              <h6>Hi there! I am </h6>
              <h3> Satyaprakash Singh</h3>
              <br />
              <p>
              As a Full Stack Developer and ServiceNow Developer Intern, I have a proven track record of creating innovative web solutions and business applications. I have hands-on experience in developing and maintaining diverse web-based tools using React, Node.js, and modern web technologies. My expertise extends to the ServiceNow platform, where I am currently expanding my skills in ITSM, HRSD, and CMDB modules. I have contributed to secure, scalable business solutions in fintech, health tech, and prop-tech while collaborating with agile teams to address complex business challenges. Passionate about leveraging technology to drive business results, I am committed to enhancing user engagement across various industries.         </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
