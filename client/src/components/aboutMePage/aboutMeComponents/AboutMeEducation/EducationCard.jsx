import React from "react";
import "../../aboutMePage.css";

let EducationCard = (props) => {
  return (
    <div className="cardEdu">
      <div className="imgBxEdu">
        <img src={props.eduImg} alt={props.eduImgDescr} />
        <h3>{props.eduType}</h3>
      </div>
      <div className="contentEdu">
        <p>{props.eduName}</p>
        <p>{props.eduNameAdv}</p>
        <p>Graduated: {props.eduDate}</p>
      </div>
    </div>
  );
};

export default EducationCard;
