import React, { useState } from "react";
import SkillsList from "./SkillsList";

const TechSkillsCard = ({ techSections, onUpdateTechSections }) => {
  const [skillsSections, setSkillsSection] = useState([]);
  const [skillSectionInput, setSkillSectionInput] = useState("");

  const handleAddSkillsSection = () => {
    setSkillsSection([
      ...skillsSections,
      { sectionName: skillSectionInput, sectionSkills: [] },
    ]);
    setSkillSectionInput("");
  };

  const onChangeSkillSectionInput = (e) => {
    setSkillSectionInput(e.target.value);
  };

  const handleSaveTechSection = () => {
    onUpdateTechSections([...techSections, skillsSections]);
  };

  return (
    <div>
      <h3>Technical Headers:</h3>
      <SkillsList
        skillsSections={skillsSections}
        onUpdateSkillsSections={setSkillsSection}
      />
      <input
        value={skillSectionInput}
        onChange={onChangeSkillSectionInput}
      ></input>
      <button onClick={handleAddSkillsSection}>Add Header</button>
      <button onClick={handleSaveTechSection}>Save Headers</button>
    </div>
  );
};

export default TechSkillsCard;
