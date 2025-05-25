import React from "react";

const Templates = ({ onUpdateTempIndex }) => {
  const handleUpdateTemplate = (templateNum) => {
    onUpdateTempIndex(templateNum);
  };

  return (
    <div className="template-container">
      <h2 className="title">Templates:</h2>
      <div className="temp-buttons-container">
        <button
          className="template-btn"
          onClick={() => handleUpdateTemplate(1)}
        >
          Jake's Resume
        </button>
        <button
          className="template-btn"
          onClick={() => handleUpdateTemplate(2)}
        >
          Modern Resume
        </button>
      </div>
    </div>
  );
};

export default Templates;
