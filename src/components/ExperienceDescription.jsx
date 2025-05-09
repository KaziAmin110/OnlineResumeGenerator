import React from "react";

const ExperienceDescription = ({
  descriptions,
  onUpdateDescriptions,
  description,
  index,
}) => {
  const handleChangeDescription = (e) => {
    onUpdate(e.target.value);
  };

  const filterRemovedDescription = () => {
    return descriptions.filter(
      (description, currentIndex) => currentIndex !== index
    );
  };

  const handleRemoveDescription = () => {
    onUpdateDescriptions(filterRemovedDescription);
  };

  return (
    <div>
      <input onChange={() => {}} value={description}></input>
      <button onClick={handleRemoveDescription}>Remove</button>
    </div>
  );
};

export default ExperienceDescription;
