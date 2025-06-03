import React, { useState } from "react";
import "../../styles/EducationInfo.css";

const EducationCard = ({ personalInfo, onUpdateUniversityInfo }) => {
  const [uniName, setUniName] = useState(personalInfo.uniName || "");
  const [uniGpa, setUniGpa] = useState(personalInfo.uniGpa || "");
  const [uniProgram, setUniProgram] = useState(personalInfo.uniProgram || "");
  const [uniGraduation, setUniGraduation] = useState(
    personalInfo.uniGraduation || ""
  );

  const handleUniNameChange = (e) => {
    setUniName(e.target.value);
  };

  const handleUniGpaChange = (e) => {
    setUniGpa(e.target.value);
  };

  const handleUniProgramChange = (e) => {
    setUniProgram(e.target.value);
  };
  const handleUniGradDateChange = (e) => {
    setUniGraduation(e.target.value);
  };

  const handleUniversityInfoUpdate = () => {
    onUpdateUniversityInfo({
      ...personalInfo,
      uniName,
      uniGpa,
      uniProgram,
      uniGraduation,
    });
  };

  return (
    <div className="input-card">
      <div className="preview-container">
        <h3 className="input-header">Enter University: </h3>
        <input
          placeholder="Enter University Name:"
          name="university-name"
          className=""
          value={uniName}
          onChange={handleUniNameChange}
        ></input>
      </div>
      <div className="preview-container">
        <h3 className="input-header">Enter GPA:</h3>
        <input
          placeholder="Enter GPA:"
          name="gpa"
          className=""
          value={uniGpa}
          onChange={handleUniGpaChange}
        ></input>
      </div>
      <div className="preview-container">
        <h3 className="input-header">Enter University Degree Program:</h3>
        <input
          placeholder="Enter University Degree:"
          name="university-degree-program"
          className=""
          value={uniProgram}
          onChange={handleUniProgramChange}
        ></input>
      </div>
      <div className="preview-container">
        <h3 className="input-header">Enter Estimated Graduation Date:</h3>
        <input
          placeholder="Enter Graduation Date:"
          name="university-graduation-date"
          value={uniGraduation}
          onChange={handleUniGradDateChange}
        ></input>
      </div>

      <button onClick={handleUniversityInfoUpdate} className="save-btn">
        Save
      </button>
    </div>
  );
};

export default EducationCard;
