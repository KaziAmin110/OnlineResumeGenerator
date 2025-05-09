import React from "react";

const Display = ({ personalInfo, experiences }) => {
  return (
    <div>
      <h1>Resume</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <h2>{university}</h2>
      <h2>{gpa}</h2>
      {experiences.map((experience, index) => {
        return <h2 key={index}>{experience.job_title}</h2>;
      })}
    </div>
  );
};

export default Display;
