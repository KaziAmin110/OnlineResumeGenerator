import ErrorDisplay from "./ErrorDisplay";

const Templates = ({
  handleDownloadPdf,
  isLoading,
  templateIndex,
  onUpdateTemplateIndex,
}) => {
  const handleUpdateTemplate = (templateNum) => {
    onUpdateTemplateIndex(templateNum);
  };

  return (
    <div className="template-container">
      <h1>Templates</h1>
      <div className="temp-buttons-container">
        <button
          className={templateIndex === 1 ? "selected-template" : "template-btn"}
          onClick={() => handleUpdateTemplate(1)}
        >
          Jake's Resume
        </button>
        <button
          className={templateIndex === 2 ? "selected-template" : "template-btn"}
          onClick={() => handleUpdateTemplate(2)}
        >
          Modern Resume
        </button>
      </div>
      <div className="template-header-subbar">
        <ErrorDisplay errorMessage={"Example Warning"} />
        <button
          className="download-btn"
          onClick={handleDownloadPdf}
          disabled={isLoading}
        >
          {isLoading ? "Downloading..." : "Download"}
        </button>
      </div>
    </div>
  );
};

export default Templates;
