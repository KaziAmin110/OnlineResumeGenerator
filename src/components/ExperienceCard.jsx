import React, { useState } from "react";

const ExperienceCard = ({ experience, onUpdateExperience, descriptions }) => {
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

  const handleAddDescription = (newDescription) => {
    onUpdateExperience((prevExperience) => ({
      ...prevExperience,
      descriptions: [...descriptions, newDescription],
    }));
    setDescription("");
  };

  const handleChangeDescription = (newDescription) => {
    setDescription(newDescription);
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
      <ul>
        {experience.descriptions.map((description, index) => {
          return <li key={index}>{description}</li>;
        })}
      </ul>
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

      <button>Add Experience</button>
    </div>
  );
};

export default ExperienceCard;
