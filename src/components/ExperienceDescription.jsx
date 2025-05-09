import React from "react";

const ExperienceDescription = ({ description, onUpdateDescriptions }) => {
  const handleChangeDescription = () => {
    onChangeExperiences();
  };
  return (
    <div>
      <input onChange={() => {}} value={description}></input>
      <button>Remove</button>
    </div>
  );
};

export default ExperienceDescription;
