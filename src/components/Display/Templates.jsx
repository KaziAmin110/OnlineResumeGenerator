import ErrorDisplay from "./ErrorDisplay";

const Templates = ({
  handleDownloadPdf,
  isLoading,
  templateIndex,
  onUpdateTemplateIndex,
  isResumeOverflow,
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
      {isResumeOverflow ? (
        <div className="template-header-subbar">
          <ErrorDisplay errorMessage={"Resume Overflow"} />
          <button
            className="template-btn"
            onClick={handleDownloadPdf}
            disabled={isLoading}
          >
            {isLoading ? "Downloading..." : "Download"}
          </button>
        </div>
      ) : (
        <button
          className="template-btn align-end"
          onClick={handleDownloadPdf}
          disabled={isLoading}
        >
          {isLoading ? "Downloading..." : "Download"}
        </button>
      )}
    </div>
  );
};

export default Templates;
