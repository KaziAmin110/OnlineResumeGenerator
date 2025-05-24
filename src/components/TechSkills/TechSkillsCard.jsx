import React, { useState } from "react";
import SkillsList from "./SkillsList";
import SectionInputs from "../SectionInputs";
import SkillsInputs from "./SkillsInputs";

const TechSkillsCard = ({ techSections, onUpdateTechSections }) => {
  const [skillsSections, setSkillsSection] = useState(techSections);

  return (
    <div className="input-card">
      <SkillsList
        skillsSections={skillsSections}
        onUpdateSkillsSections={setSkillsSection}
      />
      <SectionInputs
        experiences={skillsSections}
        onUpdateExperiences={setSkillsSection}
        sectionTitle={"Header"}
      >
        <SkillsInputs
          skillsSections={skillsSections}
          setSkillsSection={setSkillsSection}
          onUpdateTechSections={onUpdateTechSections}
        />
      </SectionInputs>
    </div>
  );
};

export default TechSkillsCard;
