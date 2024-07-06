import React from "react";
import { Card } from "./Card";
// import potterybarn from "../assets/img/projects/potterybarn.png";
// import sugercosmetics from "../assets/img/projects/sugarcosmetics.png";
// import expedia from "../assets/img/projects/expedia.png";
// import yogm from "../assets/img/projects/yogm.png";
 
// import dainik from "../assets/img/projects/dainik.png";
import tripvilla from "../assets/img/projects/tripvilla.png"
import lumen5 from "../assets/img/projects/lumen5.png"
import naukari from "../assets/img/projects/naukari.png"
import zara from "../assets/img/projects/zara.png"


import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Zara.com(Clone)",
        desc: "The project includes the Landing page, Login and Signup page, Product pages for Men, Women, and Kids section. The project is truly interactive and functional with features such as Login validation, Sorting. ",
        img: zara,
        demoLink: "https://resonant-lily-7ac8fd.netlify.app/",
        codeLink: "https://github.com/Sachin230498/fashion-shop",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "trip-villas(Clone)",
        desc: "Tripvillas is one of Asia's largest Holiday Home Rental Companies. Browse your ideal vacation home from over 1350 holiday homes spread across 231 destinations.A collaborative project, built in 5 days by a team of 5 members.  ",
        img: tripvilla,
        demoLink: "https://villroshell.netlify.app/",
        codeLink: "https://github.com/Satya057/-knowledgeable-sea-5909",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/mongodb.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
          "/icons/express.svg",
        ],
      },
      {
        name: "Naukari.com(Clone)",
        desc: "A web application to apply jobs online",
        img: naukari,
        demoLink: "https://sick-dress-4939.vercel.app/",
        codeLink: "https://github.com/Satya057/-sick-dress-4939",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/mongodb.svg",
          "/icons/express.svg",
          "/icons/nodejs-icon.svg",
          "/icons/javascript.svg",
        ],
      },

      {
        name: "lumen5.com(Clone)",
        desc: "Lumen5 is a video creation platform designed for brands and businesses to produce engaging video content for social posts, stories, and ads.",
        img: lumen5,
        demoLink: "https://workon-lumen5-r6in1tfo5-satya057.vercel.app/",
        codeLink: "https://github.com/sumitss085/bizarre-quilt-7359",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      // {
      //   name: "Sugar Cosmetics Clone",
      //   desc: "Sugar Cosmetics is an online marketplace that sells beauty products.  ",
      //   img: sugercosmetics,
      //   demoLink: "https://sugar-cosmetic.netlify.app/",
      //   codeLink: "https://github.com/hrutugandha/Sugar_Cosmetics_Project.git",
      //   techstack: [
      //     "/icons/html-5.svg",
      //     "/icons/css-3.svg",
      //     "/icons/javascript.svg",
      //   ],
      // },
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
