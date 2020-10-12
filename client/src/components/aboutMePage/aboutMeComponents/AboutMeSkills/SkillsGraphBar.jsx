import React from "react";
import "../../aboutMePage.css";

let SkillGraphBar = (props) => {
  return (
    <div
      className="bar"
      id={props.barId}
      data-aos="fade-up"
      data-aos-offset={window.innerWidth > 700 ? "260" : "100"}
      data-aos-delay={props.aosDelay}
    >
      <div className="barText">
        <p className="barTextProcent">
          {props.barProcent} <span>%</span>
        </p>
        <p className="barTextSkill">{props.barText}</p>
      </div>
    </div>
  );
};

export default SkillGraphBar;
