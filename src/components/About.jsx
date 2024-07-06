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
              Full Stack Developer proficient in HTML, CSS, and JavaScript with
experience in React.js, Node.js, and Express frameworks. Skilled in
MongoDB and MySQL databases, Git/Github, and Visual Studio Code.
Passionate about staying up-to-date with emerging technologies.
Strong problem-solving skills and ability to work in a team environment.
          </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
