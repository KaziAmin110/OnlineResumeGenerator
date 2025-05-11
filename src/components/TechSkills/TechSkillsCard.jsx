import React, { useState } from "react";
import DescriptionList from "../Experience/AddExperience/DescriptionList";
import SkillsList from "./SkillsList";

const TechSkillsCard = ({ techSections, onUpdateTechSections }) => {
  const [skillsSections, setSkillsSection] = useState([]);
  const [skillSectionInput, setSkillSectionInput] = useState("");

  const handleAddSkillsSection = () => {
    setSkillsSection([...skillsSections, skillSectionInput]);
  };

  const onChangeSkillSectionInput = (e) => {
    setSkillSectionInput(e.target.value);
  };

  return (
    <div>
      <h3>Technical Sections:</h3>
      <SkillsList
        skillsSections={skillsSections}
        onUpdateSkillsSections={setSkillsSection}
      />
      <input
        value={skillSectionInput}
        onChange={onChangeSkillSectionInput}
      ></input>
      <button onClick={handleAddSkillsSection}>Add Section</button>
    </div>
  );
};

export default TechSkillsCard;
