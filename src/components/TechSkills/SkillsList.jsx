import React from "react";
import SkillsSection from "./SkillsSection";

const SkillsList = ({ skillsSections, onUpdateSkillsSections }) => {
  return (
    <div>
      {skillsSections.map((section, index) => {
        return (
          <SkillsSection
            key={section}
            sectionName={section}
            skillsSections={skillsSections}
            onUpdateSkillsSection={onUpdateSkillsSections}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default SkillsList;
