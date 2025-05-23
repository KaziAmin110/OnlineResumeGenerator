import React, { use, useState } from "react";
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
      <div className="input-container">
        <h3>Enter University: </h3>
        <input
          placeholder="Enter University Name:"
          name="university-name"
          className="fields"
          value={uniName}
          onChange={handleUniNameChange}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter GPA:</h3>
        <input
          placeholder="Enter GPA:"
          name="gpa"
          className="fields"
          value={uniGpa}
          onChange={handleUniGpaChange}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter University Degree Program:</h3>
        <input
          placeholder="Enter University Degree:"
          name="university-degree-program"
          className="fields"
          value={uniProgram}
          onChange={handleUniProgramChange}
        ></input>
      </div>
      <div className="input-container">
        <h3>Enter Estimated Graduation Date:</h3>
        <input
          placeholder="Enter Graduation Date:"
          name="university-graduation-date"
          className="fields"
          value={uniGraduation}
          onChange={handleUniGradDateChange}
        ></input>
      </div>

      <button onClick={handleUniversityInfoUpdate} className="save-btn">Save</button>
    </div>
  );
};

export default EducationCard;
