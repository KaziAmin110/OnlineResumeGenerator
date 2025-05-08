import React from "react";
import { useState } from "react";
import "../styles/UserInfo.css";

const PersonalCard = ({ personalInfo, onUpdatePersonalInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePersonalInfoUpdate = () => {
    onUpdatePersonalInfo({ ...personalInfo, name, email, phone });
  };

  return (
    <div>
      <div className="">
        <h3>Enter Name: </h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Name:"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <h3>Enter Email:</h3>
        <input
          type="text"
          name="email"
          placeholder="Enter Email:"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <h3>Enter Phone: </h3>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone:"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <button onClick={handlePersonalInfoUpdate}>Save</button>
    </div>
  );
};

export default PersonalCard;
