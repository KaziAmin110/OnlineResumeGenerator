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
    <div>
      <h3>{header}</h3>
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
      <input
        placeholder=""
        onChange={handleChangeDescriptionInput}
        value={descriptionInput}
      ></input>

      <button onClick={handleAddDescription}>{addButtonText}</button>
    </div>
  );
};

export default DescriptionList;
