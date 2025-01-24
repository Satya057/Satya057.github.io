import React from "react";
import "./Education.css"; // Optional CSS for styling

export const Education = () => {
  const education = [
    {
      course: "Full Stack Web Development",
      institute: "Masai School",
      duration: "05/2022 – 05/2023",
      location: "Bengaluru, India",
    },
    {
      course: "Masters in Business Administration (Operation & Management)",
      institute: "Symbiosis Centre for Distance Learning (SCDL Pune)",
      duration: "01/2021 – 04/2023",
      location: "Pune, India",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      institute: "Rajarshi School of Management & Technology",
      duration: "08/2016 – 08/2019",
      location: "Varanasi, India",
    },
  ];

  return (
    <div className="education-container" id="education">
      <h1>EDUCATION</h1>
      <div className="education-cards-container">
        {education.map((item, index) => (
          <div key={index} className="education-card">
            <div className="card-body">
              <h5 className="card-title">{item.course}</h5>
              <p className="card-text">
                <strong>Institute:</strong> {item.institute}
              </p>
              <p className="card-text">
                <strong>Duration:</strong> {item.duration}
              </p>
              <p className="card-text">
                <strong>Location:</strong> {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
