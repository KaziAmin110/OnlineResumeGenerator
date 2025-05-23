import React, { useState, useRef} from "react";
import html2pdf from "html2pdf.js";
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
  const [isLoading, setIsLoading] = useState(false);
  const resumeRef = useRef();

  const handleDownloadPdf = async () => {
    if (!resumeRef.current) {
      console.error("Resume Content Not Found for PDF Download.");
      return;
    }

    setIsLoading(true);

    const opt = {
      margin: [0,0,0.25,0],
      filename: `${personalInfo.name}-resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3, logging: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    try {
      await html2pdf().set(opt).from(resumeRef.current).save();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <div className="display-container">
      <h1>Resume:</h1>
      <Templates
        templateIndex={templateIndex}
        onUpdateTempIndex={setTemplateIndex}
      />
      <div className="resume-buttons">
        <button
          className="download-btn"
          onClick={handleDownloadPdf}
          disabled={isLoading}
        >
          {isLoading ? "Downloading..." : "Download"}
        </button>
      </div>

      <div className="resume-background">
        {templateIndex === 1 && (
          <JakesResumeDisplay
            ref={resumeRef}
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
