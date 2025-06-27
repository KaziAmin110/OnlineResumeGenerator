import { useState, useRef } from "react";
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
  templateIndex,
  onUpdateTemplateIndex,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResumeOverflow, setIsResumeOverflow] = useState(false);
  const resumeRef = useRef();

  const handleDownloadPdf = async () => {
    if (!resumeRef.current) {
      console.error("Resume Content Not Found for PDF Download.");
      return;
    }

    setIsLoading(true);

    const opt = {
      margin: [0, 0, 0.25, 0],
      filename: `${personalInfo.name}-resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3, logging: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait",},
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
      <Templates
        templateIndex={templateIndex}
        handleDownloadPdf={handleDownloadPdf}
        isLoading={isLoading}
        onUpdateTemplateIndex={onUpdateTemplateIndex}
        isResumeOverflow={isResumeOverflow}
      />
      <div className="resume-background">
        {templateIndex === 1 && (
          <JakesResumeDisplay
            ref={resumeRef}
            personalInfo={personalInfo}
            experiences={experiences}
            projects={projects}
            technicalSkillsHeaders={techSkillsHeaders}
            onUpdateResumeOverflow={setIsResumeOverflow}
          />
        )}
        {templateIndex === 2 && (
          <ModernResume
            ref={resumeRef}
            personalInfo={personalInfo}
            experiences={experiences}
            projects={projects}
            technicalSkillsHeaders={techSkillsHeaders}
            setIsResumeOverflow={setIsResumeOverflow}
          />
        )}
      </div>
    </div>
  );
};

export default Display;
