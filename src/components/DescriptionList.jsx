import React from "react";
import ExperienceDescription from "./ExperienceDescription";
const DescriptionList = ({ descriptions, onUpdateDescriptions, header }) => {
  console.log(descriptions);
  return (
    <div>
      <h3>{header}</h3>
      {descriptions.map((description, index) => {
        return (
          <ExperienceDescription
            key={index}
            description={description}
            onUpdateDescriptions={onUpdateDescriptions}
          />
        );
      })}
    </div>
  );
};

export default DescriptionList;
