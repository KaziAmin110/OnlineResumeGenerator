import React from "react";
import { useState } from "react";
import "../styles/UserInfo.css";

const PersonalCard = ({
  nameInput,
  emailInput,
  phoneInput,
  onNameChange,
  onEmailChange,
  onPhoneChange,
}) => {
  return (
    <div>
      <div className="">
        <h3>Enter Name: </h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Name:"
          value={nameInput}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div>
        <h3>Enter Email:</h3>
        <input
          type="text"
          name="email"
          placeholder="Enter Email:"
          value={emailInput}
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </div>
      <div>
        <h3>Enter Phone: </h3>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone:"
          value={phoneInput}
          onChange={(e) => onPhoneChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonalCard;
