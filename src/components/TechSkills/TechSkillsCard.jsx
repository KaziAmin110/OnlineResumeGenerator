import React, { useState } from "react";
import SkillsList from "./SkillsList";

const TechSkillsCard = ({ techSections, onUpdateTechSections }) => {
  const [skillsSections, setSkillsSection] = useState(techSections);
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
    onUpdateTechSections(skillsSections);
  };

  return (
    <div className="">
      <h3>Technical Headers:</h3>
      <SkillsList
        skillsSections={skillsSections}
        onUpdateSkillsSections={setSkillsSection}
      />
      <div className="input-container">
        <h3>Add New Header:</h3>
        <input
          value={skillSectionInput}
          onChange={onChangeSkillSectionInput}
        ></input>
        <button onClick={handleAddSkillsSection}>Add Header</button>
      </div>

      <button onClick={handleSaveTechSection}>Save Headers</button>
    </div>
  );
};

export default TechSkillsCard;
