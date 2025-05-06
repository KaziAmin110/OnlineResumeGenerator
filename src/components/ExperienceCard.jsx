import React, { useState } from "react";

const ExperienceCard = () => {
  const [bullets, setBullets] = useState([]);
  const [description, setDescription] = useState("");

  const handleAddDescription = (newDescription) => {
    setBullets([...bullets, newDescription]);
    setDescription("");
  };

  const handleChangeDescription = (newDescription) => {
    setDescription(newDescription);
  };

  return (
    <div>
      <h3>Job Title:</h3>
      <input placeholder="" onChange={(e) => {}} value={1}></input>
      <h3>Company Name:</h3>
      <input placeholder="" onChange={(e) => {}} value={2}></input>
      <h3>Start Date:</h3>
      <input placeholder="" onChange={(e) => {}} value={3}></input>
      <h3>End Date:</h3>
      <input placeholder="" onChange={(e) => {}} value={4}></input>
      <h3>Description List:</h3>
      <ul>
        {bullets.map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>
      <input
        placeholder=""
        onChange={(e) => {
          handleChangeDescription(e.target.value);
        }}
        value={description}
      ></input>
      <button onClick={() => handleAddDescription(description)}>
        Add Description
      </button>

      <button>Add Experience</button>
    </div>
  );
};

export default ExperienceCard;
