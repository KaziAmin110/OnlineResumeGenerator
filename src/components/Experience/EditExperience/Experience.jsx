import React, { useState } from "react";
import DescriptionList from "../AddExperience/DescriptionList";

const Experience = ({
  experience,
  experiences,
  onUpdateExperiences,
  onUpdateDescriptions,
  index,
}) => {
  const [experienceInputs, setExperienceInputs] = useState({
    jobTitle: experience.jobTitle,
    companyName: experience.companyName,
    companyLocation: experience.companyLocation,
    startDate: experience.startDate,
    endDate: experience.endDate,
    descriptions: experience.descriptions,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [descriptions, setDescriptions] = useState(experience.descriptions);

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
        return { ...experienceInputs, descriptions };
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
    <div className="experience-card">
      <div className="preview-buttons">
        {isEditing && (
          <button onClick={handleSaveExperience} className="save-btn">
            Save
          </button>
        )}

        <button onClick={handleToggleEdit} className="preview-button">
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button onClick={handleRemoveExperience} className="preview-button">
          Remove
        </button>
      </div>

      {isEditing ? (
        <div className="preview-container">
          <h3>Enter Job Title:</h3>
          <input
            value={experienceInputs.jobTitle}
            onChange={(e) => handleChangeInput(e, "jobTitle")}
          ></input>
          <h3>Enter Company Name:</h3>
          <input
            value={experienceInputs.companyName}
            onChange={(e) => handleChangeInput(e, "companyName")}
          ></input>
          <h3>Enter Company Location:</h3>
          <input
            value={experienceInputs.companyLocation}
            onChange={(e) => handleChangeInput(e, "companyLocation")}
          ></input>
          <h3>Enter Start Date:</h3>
          <input
            value={experienceInputs.startDate}
            onChange={(e) => handleChangeInput(e, "startDate")}
          ></input>
          <h3>Enter End Date:</h3>
          <input
            value={experienceInputs.endDate}
            onChange={(e) => handleChangeInput(e, "endDate")}
          ></input>
          <DescriptionList
            header="Descriptions:"
            descriptions={descriptions}
            onUpdateDescriptions={setDescriptions}
          />
        </div>
      ) : (
        <div className="preview-container">
          <h1>{experience.jobTitle}</h1>
          <h2>{experience.companyName}</h2>
          <div className="date-container">
            <h3>{experience.companyLocation}</h3>
            <div className="date">
              <h3>
                {experience.startDate} - {experience.endDate}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
