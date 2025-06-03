import React from "react";
import Description from "./Description";
import { useState } from "react";

const DescriptionList = ({
  descriptions,
  onUpdateDescriptions,
  header,
  addButtonText = "Add Description",
}) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const handleChangeDescriptionInput = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleAddDescription = () => {
    onUpdateDescriptions([...descriptions, descriptionInput]);
    setDescriptionInput("");
  };

  return (
    <div className="input-container">
      <h3 className="input-header">{header}</h3>
      {descriptions.map((description, index) => {
        return (
          <Description
            key={index}
            descriptions={descriptions}
            onUpdateDescriptions={onUpdateDescriptions}
            description={description}
            index={index}
          />
        );
      })}
      <div className="description-item-container">
        <input
          placeholder=""
          name="descriptionInput"
          className="description-input"
          onChange={handleChangeDescriptionInput}
          value={descriptionInput}
        ></input>

        <button onClick={handleAddDescription} className="add-button">
          {addButtonText}
        </button>
      </div>
    </div>
  );
};

export default DescriptionList;
