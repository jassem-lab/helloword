import React from "react";
import "../../aboutMePage.css";
import BlockTitleText from "../../../../common/BlockTitle";
import EducationCard from "./EducationCard";
import frontEndEdu from "../../img/Education/edu-card-front-end.svg";
import schoolEdu from "../../img/Education/edu-card-school.svg";

let AboutMeEducation = () => {
  return (
    <div className="eduOverlay wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"EDUCATION"} />
      <div className="containerEdu wrapper">
        <EducationCard
          eduType={"School"}
          eduName={""}
          eduDate={"2012-2017"}
          eduImg={schoolEdu}
          eduImgDescr={"school icon"}
        />
        <EducationCard
          eduType={"Web Development"}
          eduName={"Go my code"}
          eduNameAdv={"Speciality: FullStack Web Development"}
          eduDate={"2019"}
          eduImg={frontEndEdu}
          eduImgDescr={"frontEnd icon"}
        />
      </div>
    </div>
  );
};

export default AboutMeEducation;
