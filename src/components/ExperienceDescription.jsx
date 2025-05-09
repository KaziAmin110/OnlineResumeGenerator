import React, { useState } from "react";

const ExperienceDescription = ({
  descriptions,
  onUpdateDescriptions,
  description,
  index,
}) => {
  const [isEditable, setIsEditable] = useState(true);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const handleChangeDescriptionInput = (e) => {
    setDescriptionInput(e.target.value);
  };

  const filterRemovedDescription = () => {
    return descriptions.filter(
      (description, currentIndex) => currentIndex !== index
    );
  };

  const handleRemoveDescription = () => {
    onUpdateDescriptions(filterRemovedDescription);
  };

  const handleOnEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleOnSave = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div>
      {isEditable ? (
        <p>{description}</p>
      ) : (
        <input
          value={descriptionInput}
          onChange={handleChangeDescriptionInput}
        ></input>
      )}
      {isEditable ? (
        <button onClick={handleOnEdit}>Edit</button>
      ) : (
        <button onClick={handleOnSave}>Save</button>
      )}
      <button onClick={handleRemoveDescription}>Remove</button>
    </div>
  );
};

export default ExperienceDescription;
