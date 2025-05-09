import React, { useState } from "react";

const Description = ({
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

  const filterEditDescription = () => {
    return descriptions.map((description, currentIndex) => {
      if (currentIndex === index) {
        return descriptionInput;
      } else {
        return description;
      }
    });
  };

  const handleRemoveDescription = () => {
    onUpdateDescriptions(filterRemovedDescription);
  };

  const handleOnEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleOnSave = () => {
    setIsEditable(!isEditable);
    onUpdateDescriptions(filterEditDescription);
  };

  return (
    <div>
      {isEditable && (
        <div>
          <p>{description}</p>
          <button onClick={handleOnEdit}>Edit</button>
        </div>
      )}
      {!isEditable && (
        <div>
          <input
            value={descriptionInput}
            onChange={handleChangeDescriptionInput}
          ></input>

          <button onClick={handleOnSave}>Save</button>
        </div>
      )}
      <button onClick={handleRemoveDescription}>Remove</button>
    </div>
  );
};

export default Description;
