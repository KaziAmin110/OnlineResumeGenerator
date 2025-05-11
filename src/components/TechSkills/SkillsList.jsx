import React from "react";
import SkillsSection from "./SkillsSection";

const SkillsList = ({ skillsSections, onUpdateSkillsSections }) => {
  return (
    <div>
      {skillsSections.map((section, index) => {
        return (
          <SkillsSection
            key={index}
            sectionName={section}
            onUpdateSkillsSection={onUpdateSkillsSections}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default SkillsList;
