import ExperienceList from "./EditExperience/ExperienceList.jsx";
import SectionInputs from "../SectionInputs.jsx";
import ExperienceInputs from "./ExperienceInputs.jsx";

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
      >
        <ExperienceInputs
          experiences={experiences}
          onUpdateExperiences={onUpdateExperiences}
        />
      </SectionInputs>
    </div>
  );
};

export default ExperienceCard;
