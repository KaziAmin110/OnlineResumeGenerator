import React, { useState } from "react";

const Experience = ({
  experience,
  experiences,
  onUpdateExperiences,
  index,
}) => {
  const [experienceInputs, setExperienceInputs] = useState({
    jobTitle: experience.jobTitle,
    companyName: experience.companyName,
    startDate: experience.startDate,
    endDate: experience.endDate,
    descriptions: experience.descriptions,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const removeCurrentExperience = () => {
    return experiences.filter(
      (experience, currentIndex) => currentIndex !== index
    );
  };

  const handleRemoveExperience = () => {
    onUpdateExperiences(removeCurrentExperience);
  };

  const handleChangeInput = (e, inputName) => {
    setExperienceInputs({
      ...experienceInputs,
      [inputName]: e.target.value,
    });
  };

  const updateCurrentExperience = () => {
    return experiences.map((experience, currentIndex) => {
      if (currentIndex === index) {
        return experienceInputs;
      } else {
        return experience;
      }
    });
  };

  const handleSaveExperience = () => {
    setIsEditing(!isEditing);
    onUpdateExperiences(updateCurrentExperience);
  };

  return (
    <div>
      {isEditing && <button onClick={handleSaveExperience}>Save</button>}
      <button onClick={handleToggleEdit}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleRemoveExperience}>Remove</button>
      {isEditing ? (
        <div>
          <input
            value={experienceInputs.jobTitle}
            onChange={(e) => handleChangeInput(e, "jobTitle")}
          ></input>
          <input
            value={experienceInputs.companyName}
            onChange={(e) => handleChangeInput(e, "companyName")}
          ></input>
          <input
            value={experienceInputs.startDate}
            onChange={(e) => handleChangeInput(e, "startDate")}
          ></input>
          <input
            value={experienceInputs.endDate}
            onChange={(e) => handleChangeInput(e, "endDate")}
          ></input>
        </div>
      ) : (
        <div>
          <h1>{experience.jobTitle}</h1>
          <h1>{experience.companyName}</h1>
          <h1>{experience.startDate}</h1>
          <h1>{experience.endDate}</h1>
          <h1>{experience.descriptions}</h1>
        </div>
      )}
    </div>
  );
};

export default Experience;
