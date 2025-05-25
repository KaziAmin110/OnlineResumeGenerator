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
    <div className="description-item-container">
      {isEditable && (
        <>
          <p className="description">{description}</p>
          <button onClick={handleOnEdit} className="preview-button">Edit</button>
        </>
      )}
      {!isEditable && (
        <>
          <input
            value={descriptionInput}
            onChange={handleChangeDescriptionInput}
          ></input>

          <button onClick={handleOnSave} className="save-btn">Save</button>
        </>
      )}
      <button onClick={handleRemoveDescription} className="preview-button">Remove</button>
    </div>
  );
};

export default Description;
