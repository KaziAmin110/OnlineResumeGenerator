import { useState } from "react";
import ExperienceInputs from "./Experience/ExperienceInputs.jsx";
const SectionInputs = ({
  experiences,
  onUpdateExperiences,
  sectionTitle,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        isOpen
          ? "experience-card experience-input-containers-open "
          : "experience-input-containers-close"
      }
    >
      <button onClick={handleToggleOpen} className="preview-button">
        {isOpen ? "Cancel" : "Add " + sectionTitle}
      </button>
      {isOpen && <h1 className="input-title">Add {sectionTitle}</h1>}

      {isOpen && children}
    </div>
  );
};

export default SectionInputs;
