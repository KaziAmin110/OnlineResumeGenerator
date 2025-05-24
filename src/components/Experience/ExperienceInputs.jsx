import { useState } from "react";
import DescriptionList from "./AddExperience/DescriptionList";

const ExperienceInputs = ({
  experiences,
  onUpdateExperiences,
  onUpdateToggle,
}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  const handleChangeJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleChangeCompanyLocation = (e) => {
    setCompanyLocation(e.target.value);
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
        companyLocation,
        startDate,
        endDate,
        descriptions,
      },
    ]);
    setJobTitle("");
    setCompanyName("");
    setCompanyLocation("");
    setStartDate("");
    setEndDate("");
    setDescriptions([]);
    onUpdateToggle();
  };

  return (
    <div className="preview-container">
      <div className="input-container">
        <h3>Enter Job Title:</h3>
        <input
          placeholder=""
          onChange={handleChangeJobTitle}
          value={jobTitle}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter Company Name:</h3>
        <input
          placeholder=""
          onChange={handleChangeCompanyName}
          value={companyName}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter Company Location:</h3>
        <input
          placeholder=""
          onChange={handleChangeCompanyLocation}
          value={companyLocation}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter Position Start Date:</h3>
        <input
          placeholder=""
          onChange={handleChangeStartDate}
          value={startDate}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter Position End Date:</h3>
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
      <div className="center-div">
        <button onClick={handleAddExperience} className="preview-button">
          Add
        </button>
      </div>
    </div>
  );
};

export default ExperienceInputs;
