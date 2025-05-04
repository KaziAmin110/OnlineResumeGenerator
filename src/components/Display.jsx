import React from "react";

const Display = ({ name, email, phone, university, gpa }) => {
  return (
    <div>
      <h1>Resume</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <h2>{university}</h2>
      <h2>{gpa}</h2>
    </div>
  );
};

export default Display;
