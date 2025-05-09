import React, { useState } from "react";
import ExperienceDescription from "./ExperienceDescription";

const ExperienceCard = ({ experiences, onUpdateExperiences }) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [descriptions, setDescriptions] = useState("");

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
          handleChangeDescriptionInput(e.target.value);
        }}
        value={descriptionInput}
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
