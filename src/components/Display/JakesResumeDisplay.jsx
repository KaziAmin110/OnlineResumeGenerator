import React from "react";

const JakesResumeDisplay = ({
  personalInfo,
  experiences,
  projects,
  technicalSkillsHeaders,
}) => {
  const { userName, userEmail, userPhone, uniName, uniGpa } = personalInfo;

  return (
    <div className="resume-container">
      <h1>Kazi Amin</h1>
      <h2>kaziamin1239@gmail.com</h2>
    </div>
  );
};

export default JakesResumeDisplay;
