import React, { useState } from "react";
import DescriptionList from "./AddExperience/DescriptionList.jsx";
import ExperienceList from "./EditExperience/ExperienceList.jsx";
import ExperienceInputs from "./ExperienceInputs.jsx";

const ExperienceCard = ({ experiences, onUpdateExperiences }) => {
  return (
    <div className="input-card">
      <ExperienceList
        experiences={experiences}
        onUpdateExperiences={onUpdateExperiences}
      />
      <ExperienceInputs
        experiences={experiences}
        onUpdateExperiences={onUpdateExperiences}
      />
    </div>
  );
};

export default ExperienceCard;
