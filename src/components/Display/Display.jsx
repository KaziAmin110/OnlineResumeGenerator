import React, { useState } from "react";
import "./Templates.jsx";
import Templates from "./Templates.jsx";
import JakesResumeDisplay from "./JakesResumeDisplay.jsx";
import ModernResume from "./ModernResume.jsx";

const Display = ({
  personalInfo,
  experiences,
  projects,
  techSkillsHeaders,
}) => {
  const [templateIndex, setTemplateIndex] = useState(1);

  return (
    <div className="display-container">
      <h1>Resume</h1>
      <Templates
        templateIndex={templateIndex}
        onUpdateTempIndex={setTemplateIndex}
      />
      <div className="resume-background">
        {templateIndex === 1 && (
          <JakesResumeDisplay
            personalInfo={personalInfo}
            experiences={experiences}
            projects={projects}
            technicalSkillsHeaders={techSkillsHeaders}
          />
        )}
        {templateIndex === 2 && (
          <ModernResume
            personalInfo={personalInfo}
            experiences={experiences}
            projects={projects}
            technicalSkillsHeaders={techSkillsHeaders}
          />
        )}
      </div>
    </div>
  );
};

export default Display;
