import React, { useState } from "react";
import SkillsList from "./SkillsList";
import SectionInputs from "../SectionInputs";
import SkillsInputs from "./SkillsInputs";

const TechSkillsCard = ({ techSections, onUpdateTechSections }) => {
  return (
    <div className="input-card">
      <SkillsList
        skillsSections={techSections}
        onUpdateSkillsSections={onUpdateTechSections}
      />
      <SectionInputs
        experiences={techSections}
        onUpdateExperiences={onUpdateTechSections}
        sectionTitle={"Header"}
      >
        <SkillsInputs
          skillsSections={techSections}
          setSkillsSection={onUpdateTechSections}
          onUpdateTechSections={onUpdateTechSections}
        />
      </SectionInputs>
    </div>
  );
};

export default TechSkillsCard;
