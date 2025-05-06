import React, { useState } from "react";
import ExperienceDescription from "./ExperienceDescription";

const ExperienceCard = ({
  experience,
  onUpdateExperience,
  descriptions,
  onChangeExperiences,
}) => {
  const [description, setDescription] = useState("");

  const handleChangeJobTitle = (event) => {
    onUpdateExperience((prevExperience) => ({
      ...prevExperience,
      job_title: event.target.value,
    }));
  };

  const handleChangeCompanyName = (event) => {
    onUpdateExperience((prevExperience) => ({
      ...prevExperience,
      company_name: event.target.value,
    }));
  };

  const handleChangeStartDate = (event) => {
    onUpdateExperience((prevExperience) => ({
      ...prevExperience,
      start_date: event.target.value,
    }));
  };

  const handleChangeEndDate = (event) => {
    onUpdateExperience((prevExperience) => ({
      ...prevExperience,
      end_date: event.target.value,
    }));
  };

  const handleChangeDescription = (newDescription) => {
    setDescription(newDescription);
  };

  const handleAddDescription = (newDescription) => {
    onUpdateExperience((prevExperience) => ({
      ...prevExperience,
      descriptions: [...descriptions, newDescription],
    }));
    setDescription("");
  };

  const handleAddExperience = (newExperience) => {
    onChangeExperiences((prevExperience) => [...prevExperience, newExperience]);
  };

  return (
    <div>
      <h3>Job Title:</h3>
      <input
        placeholder=""
        onChange={handleChangeJobTitle}
        value={experience.job_title}
      ></input>
      <h3>Company Name:</h3>
      <input
        placeholder=""
        onChange={handleChangeCompanyName}
        value={experience.company_name}
      ></input>
      <h3>Start Date:</h3>
      <input
        placeholder=""
        onChange={handleChangeStartDate}
        value={experience.start_date}
      ></input>
      <h3>End Date:</h3>
      <input
        placeholder=""
        onChange={handleChangeEndDate}
        value={experience.end_date}
      ></input>

      <h3>Description List:</h3>
      {descriptions.map((description, index) => {
        return <ExperienceDescription key={index} description={description} />;
      })}
      <input
        placeholder=""
        onChange={(e) => {
          handleChangeDescription(e.target.value);
        }}
        value={description}
      ></input>

      <button onClick={() => handleAddDescription(description)}>
        Add Description
      </button>

      <button onClick={() => handleAddExperience(experience)}>
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceCard;
