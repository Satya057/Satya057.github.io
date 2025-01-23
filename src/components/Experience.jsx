import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.css"; // Import the CSS file

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Riseupp Edutech Pvt Ltd",
    icon: "https://pbs.twimg.com/profile_images/1618631076825698304/dOMg8g3H_400x400.jpg",
    iconBg: "#383E56",
    date: "Dec 2022 - March 2023",
    link: "https://drive.google.com/file/d/1u-f7QspMh_rS4bx2rUixlx46hufr3Vzl/view?usp=sharing",
    points: [
      "Created a single sign-up page using Google Firebase and scraped course data from EDX via API.",
      "Worked on React.JS, React-Bootstrap, CSS.",
      "Adapted Agile methodologies, CI/CD, and Test-Driven Programming to uphold strong programming practices.",
      "Utilized technologies like HTML, Spring Boot, CSS, React, and AngularJS.",
    ],
  },
  {
    title: "Full Stack Web Development certification course",
    company_name: "Masai School",
    icon: "https://lwfiles.mycourse.app/masai-school-public/283427801ef0376bad3f197fad544f38.png",
    iconBg: "#383E56",
    date: "June 2022 - June 2023",
    link: "https://drive.google.com/file/d/1Xe3Ye08EZaCuOC865r3C1L6LutlnuI3i/view?usp=sharing",
    points: [
      "Designed and implemented a system for fine-grained access control of digital assets.",
      "Used advanced cryptographic techniques for secure and efficient access management.",
      "Collaborated with Spring Boot and React to develop high-quality products.",
      "Ensured seamless integration between various system components.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="icon-container">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="icon-img"
          />
        </div>
      }
    >
      <div>
        <h3 className="experience-title">{experience.title}</h3>
        <p className="experience-company">{experience.company_name}</p>
      </div>
      <ul className="experience-points">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="experience-point">
            {point}
          </li>
        ))}
        <a
          href={experience.link}
          className="experience-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div id="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p className="experience-subtitle">What I have done so far</p>
        <h2 className="experience-title">Work Experience</h2>
      </motion.div>
      <div className="timeline-container">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
