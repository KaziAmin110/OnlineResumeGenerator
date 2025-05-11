import React from "react";
import Experience from "./Experience";

const ExperienceList = ({
  experiences,
  onUpdateExperiences,
  onUpdateDescriptions,
}) => {
  return (
    <div>
      {experiences.map((experience, index) => {
        return (
          <Experience
            experience={experience}
            key={index}
            experiences={experiences}
            onUpdateExperiences={onUpdateExperiences}
            onUpdateDescriptions={onUpdateDescriptions}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ExperienceList;
