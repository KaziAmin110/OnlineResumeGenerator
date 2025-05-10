import React from "react";
import Experience from "./Experience";

const ExperienceList = ({ experiences, onUpdateExperiences }) => {
  return (
    <div>
      {experiences.map((experience, index) => {
        return (
          <Experience
            experience={experience}
            key={index}
            onUpdateExperiences={onUpdateExperiences}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ExperienceList;
