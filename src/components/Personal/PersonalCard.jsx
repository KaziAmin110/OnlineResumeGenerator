import { useState } from "react";
import "../../styles/UserInfo.css";

const PersonalCard = ({
  personalInfo,
  onUpdatePersonalInfo,
  templateIndex,
}) => {
  const [name, setName] = useState(personalInfo.name);
  const [email, setEmail] = useState(personalInfo.email);
  const [phone, setPhone] = useState(personalInfo.phone);
  const [linkedIn, setLinkedIn] = useState(personalInfo.linkedIn);
  const [personalSummary, setPersonalSummary] = useState(
    personalInfo.personalSummary
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLinkedinChange = (e) => {
    setLinkedIn(e.target.value);
  };

  const handlePersonaSummaryChange = (e) => {
    setPersonalSummary(e.target.value);
  };

  const handlePersonalInfoUpdate = () => {
    onUpdatePersonalInfo({
      ...personalInfo,
      name,
      email,
      phone,
      linkedIn,
      personalSummary,
    });
  };

  return (
    <div className="input-card">
      <div className="preview-container">
        <h3 className="input-header">Enter Name: </h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Name:"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="preview-container">
        <h3 className="input-header">Enter Email:</h3>
        <input
          type="text"
          name="email"
          placeholder="Enter Email:"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="preview-container">
        <h3 className="input-header">Enter Phone: </h3>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone:"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className="preview-container">
        <h3 className="input-header">Enter LinkedIn: </h3>
        <input
          type="text"
          name="linkedIn"
          placeholder="Enter LinkedIn:"
          value={linkedIn}
          onChange={handleLinkedinChange}
        />
      </div>
      {templateIndex === 2 && (
        <div className="preview-container">
          <h3 className="input-header">Enter Personal Summary: </h3>
          <input
            type="text"
            name="summary"
            placeholder="Enter LinkedIn:"
            value={personalSummary}
            onChange={handlePersonaSummaryChange}
          />
        </div>
      )}

      <button onClick={handlePersonalInfoUpdate} className="save-btn">
        Save
      </button>
    </div>
  );
};

export default PersonalCard;
