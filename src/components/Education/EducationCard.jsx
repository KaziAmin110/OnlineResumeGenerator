import React, { useState } from "react";
import "../../styles/EducationInfo.css";

const EducationCard = ({ personalInfo, onUpdateUniversityInfo }) => {
  const [uniName, setUniName] = useState(personalInfo.uniName || "");
  const [uniGpa, setUniGpa] = useState(personalInfo.uniGpa || "");

  const handleUniNameChange = (e) => {
    setUniName(e.target.value);
  };

  const handleUniGpaChange = (e) => {
    setUniGpa(e.target.value);
  };

  const handleUniversityInfoUpdate = () => {
    onUpdateUniversityInfo({ ...personalInfo, uniName, uniGpa });
  };

  return (
    <div>
      <div>
        <h3>Enter University: </h3>
        <input
          placeholder="Enter University Name:"
          name="university-name"
          className="fields"
          value={uniName}
          onChange={handleUniNameChange}
        ></input>
      </div>
      <div>
        <h3>Enter GPA:</h3>
        <input
          placeholder="Enter GPA:"
          name="gpa"
          className="fields"
          value={uniGpa}
          onChange={handleUniGpaChange}
        ></input>
      </div>

      <button onClick={handleUniversityInfoUpdate}>Save</button>
    </div>
  );
};

export default EducationCard;
