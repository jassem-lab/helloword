import React from "react";
import "../MainPage.css";

let SkillCard = (props) => {
  return (
    <div className="skillCard" data-aos="flip-right" data-aos-delay={props.aosDelay}>
      <img src={props.img} alt={props.imgDescr} />
      <p>{props.skillText}</p>
    </div>
  );
};

export default SkillCard;
