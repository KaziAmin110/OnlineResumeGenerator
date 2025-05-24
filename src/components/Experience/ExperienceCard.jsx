import ExperienceList from "./EditExperience/ExperienceList.jsx";
import SectionInputs from "../SectionInputs.jsx";

const ExperienceCard = ({ experiences, onUpdateExperiences }) => {
  return (
    <div className="input-card">
      <ExperienceList
        experiences={experiences}
        onUpdateExperiences={onUpdateExperiences}
      />
      <SectionInputs
        experiences={experiences}
        onUpdateExperiences={onUpdateExperiences}
        sectionTitle={"Experience"}
      />
    </div>
  );
};

export default ExperienceCard;
