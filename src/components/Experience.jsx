import React from "react";

const Experience = ({ experience }) => {
  return (
    <div>
      <h1>{experience.jobTitle}</h1>
      <h1>{experience.companyName}</h1>
      <h1>{experience.startDate}</h1>
      <h1>{experience.endDate}</h1>
      <h1>{experience.descriptions}</h1>
    </div>
  );
};

export default Experience;
