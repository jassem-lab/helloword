import React from "react";
import SetDidPoint from "./Forms/DetailesWhatIDidForm";
import SetTypeOfWork from "./Forms/DetailesTypeofWorkForm";
import SetTechnologies from "./Forms/DetailesTechnologiesForm";

const WorkDetailsEdit = (props) => {
  return (
    <div className="workDetails">
      <SetTypeOfWork allWorks={props.allWorks} onSubmit={props.updateWorkItem} />
      <SetDidPoint allWorks={props.allWorks} onSubmit={props.createWorkDidPoint} />
      <SetTechnologies allWorks={props.allWorks} onSubmit={props.updateWorkItem} />
    </div>
  );
};

export default WorkDetailsEdit;
