import React from "react";
import "../../Admin.css";
import mainImg from "../../img/mainImgExample.png";
import HeaderOFWork from "./NewWorkComponents/HeaderOfWork";
import WorkOverviewEdit from "./NewWorkComponents/WorkOverviewEdit";
import WorkDetailsEdit from "./NewWorkComponents/WorkDetailesEdit";
import WorkImagesEdit from "./NewWorkComponents/WorkImagesEdit";
import FilePondWorks from "./NewWorkComponents/FilePondWorks";

const WorkSpaceNewWork = (props) => {
  const workPhotoArr = [];
  props.images.forEach((ImgData) => {
    if (ImgData.type === "workPhoto") {
      workPhotoArr.push(ImgData);
    }
  });
  const imgSrc =
    workPhotoArr[0] &&
    `data:${workPhotoArr[0].imgType};charset=utf-8;base64,${workPhotoArr[0].img.toString(
      "base64"
    )}`;
  return (
    <div>
      <HeaderOFWork 
        images={props.images}
        allWorks={props.allWorks}
        createWorkItem={props.createWorkItem}
        updateWorkItem={props.updateWorkItem}
      />
      <div className="workDescriber">
        <div className="workMainLogo">
          <img src={imgSrc || mainImg} alt={workPhotoArr[0] && workPhotoArr[0].descr} />
        </div>
        <div className="workMainInfo wrapper">
          <WorkOverviewEdit
            allWorks={props.allWorks}
            createWorkColor={props.createWorkColor}
            createWorkStyle={props.createWorkStyle}
            onColorChange={props.onColorChange}
            updateWorkItem={props.updateWorkItem}
          />
          <WorkDetailsEdit
            allWorks={props.allWorks}
            onPointChange={props.onPointChange}
            createWorkDidPoint={props.createWorkDidPoint}
            updateWorkItem={props.updateWorkItem}
          />
        </div>
      </div>
      <FilePondWorks loading={props.loading} allWorks={props.allWorks} currentWorkId={props.currentWorkId}/>
      <WorkImagesEdit allWorks={props.allWorks} images={props.images} />
    </div>
  );
};

export default WorkSpaceNewWork;
