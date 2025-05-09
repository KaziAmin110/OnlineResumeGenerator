import React, { useState } from "react";
import ExperienceDescription from "./ExperienceDescription";
import DescriptionList from "./DescriptionList";

const ExperienceCard = ({ experiences, onUpdateExperiences }) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  const handleChangeJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleChangeDescriptionInput = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleAddDescription = () => {
    setDescriptions([...descriptions, descriptionInput]);
    setDescriptionInput("");
  };

  const handleAddExperience = () => {
    onUpdateExperiences(...experiences, {
      jobTitle,
      companyName,
      startDate,
      endDate,
      descriptions,
    });
  };

  return (
    <div>
      <div>
        <h3>Job Title:</h3>
        <input
          placeholder=""
          onChange={handleChangeJobTitle}
          value={jobTitle}
        ></input>
      </div>

      <div>
        <h3>Company Name:</h3>
        <input
          placeholder=""
          onChange={handleChangeCompanyName}
          value={companyName}
        ></input>
      </div>

      <div>
        <h3>Start Date:</h3>
        <input
          placeholder=""
          onChange={handleChangeStartDate}
          value={startDate}
        ></input>
      </div>

      <div>
        <h3>End Date:</h3>
        <input
          placeholder=""
          onChange={handleChangeEndDate}
          value={endDate}
        ></input>
      </div>

      <DescriptionList
        descriptions={descriptions}
        onUpdateDescriptions={setDescriptions}
        header="Descriptions:"
      />
      <input
        placeholder=""
        onChange={handleChangeDescriptionInput}
        value={descriptionInput}
      ></input>

      <button onClick={handleAddDescription}>Add Description</button>
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceCard;
