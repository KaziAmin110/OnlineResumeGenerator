import React, { useState } from "react";
import DescriptionList from "./DescriptionList";
import ExperienceList from "./ExperienceList";

const ExperienceCard = ({ experiences, onUpdateExperiences }) => {
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

  const handleAddExperience = () => {
    onUpdateExperiences([
      ...experiences,
      {
        jobTitle,
        companyName,
        startDate,
        endDate,
        descriptions,
      },
    ]);
    setJobTitle("");
    setCompanyName("");
    setStartDate("");
    setEndDate("");
    setDescriptions([]);
  };

  return (
    <div>
      <ExperienceList
        experiences={experiences}
        onUpdateExperiences={onUpdateExperiences}
      />
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
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceCard;
