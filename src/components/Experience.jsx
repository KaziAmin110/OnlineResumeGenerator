import React, { useState } from "react";

const Experience = ({
  experience,
  experiences,
  onUpdateExperiences,
  index,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleToggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const filterCurrentExperience = () => {
    return experiences.filter(
      (experience, currentIndex) => currentIndex !== index
    );
  };

  const handleRemoveExperience = () => {
    onUpdateExperiences(filterCurrentExperience);
  };

  return (
    <div>
      <button onClick={handleToggleEdit}>Edit</button>
      <button>Remove</button>
      <h1>{experience.jobTitle}</h1>
      <h1>{experience.companyName}</h1>
      <h1>{experience.startDate}</h1>
      <h1>{experience.endDate}</h1>
      <h1>{experience.descriptions}</h1>
    </div>
  );
};

export default Experience;
