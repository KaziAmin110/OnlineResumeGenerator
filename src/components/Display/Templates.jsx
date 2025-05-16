import React from "react";

const Templates = ({ onUpdateTempIndex }) => {
  const handleUpdateTemplate = (templateNum) => {
    onUpdateTempIndex(templateNum);
  };

  return (
    <div className="template-container">
      <h2>Templates:</h2>
      <div className="temp-buttons-container">
        <button className="" onClick={() => handleUpdateTemplate(1)}>
          Jake's Resume
        </button>
        <button className="" onClick={() => handleUpdateTemplate(2)}>
          Modern Resume
        </button>
      </div>
    </div>
  );
};

export default Templates;
