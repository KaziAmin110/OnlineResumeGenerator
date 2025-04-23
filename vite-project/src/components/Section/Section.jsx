import React from "react";
import Input from "../Input/Input.jsx";

const Section = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Input field="First Name" />
      <Input field="Last Name" />
      <Input field="Email" />
    </div>
  );
};

export default Section;
