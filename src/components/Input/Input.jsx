import React from "react";

const Input = ({ field }) => {
  return (
    <div>
      <h3>{field}: </h3>
      <input type="text" placeholder={field} />
    </div>
  );
};

export default Input;
