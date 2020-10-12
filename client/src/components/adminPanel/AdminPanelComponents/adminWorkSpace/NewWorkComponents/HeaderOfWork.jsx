import React from "react";
import mainBackground from "../../../img/mainBackgroundExample.jpg";
import CreateNewWorkItem from "./Forms/HeaderCreateWorkForm";

const HeaderOFWork = (props) => {
  const workBackArr = [];
  props.images.forEach((ImgData) => {
    if (ImgData.type === "workBackground") {
      workBackArr.push(ImgData);
    }
  });
  const imgSrc = workBackArr[0]
    ? `data:${workBackArr[0].imgType};charset=utf-8;base64,${workBackArr[0].img.toString("base64")}`
    : mainBackground;

  const backImage =
    props.allWorks[props.allWorks.length - 1] &&
    props.allWorks[props.allWorks.length - 1].background;
  return (
    <header
      className="workHeader"
      style={{
        background: workBackArr[0] !== undefined ? "url(" + imgSrc + ")" : backImage,
        boxShadow: workBackArr[0] !== undefined && "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="workIntro workIntroEdit">
        <CreateNewWorkItem onSubmit={props.createWorkItem} />
      </div>
    </header>
  );
};

export default HeaderOFWork;
