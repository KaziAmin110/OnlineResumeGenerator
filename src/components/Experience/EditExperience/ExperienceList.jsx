import React, { useState } from "react";
import Experience from "./Experience";

const ExperienceList = ({ experiences, onUpdateExperiences }) => {
  return (
    <div className="experience-list">
      {experiences.map((experience, index) => {
        return (
          <Experience
            experience={experience}
            key={index}
            experiences={experiences}
            onUpdateExperiences={onUpdateExperiences}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ExperienceList;
