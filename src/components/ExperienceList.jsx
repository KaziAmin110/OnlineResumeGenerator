import React from "react";
import Experience from "./Experience";

const ExperienceList = ({ experiences }) => {
  return (
    <div>
      {experiences.map((experience, index) => {
        return <Experience experience={experience} key={index} />;
      })}
    </div>
  );
};

export default ExperienceList;
