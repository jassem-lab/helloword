import React from "react";
import UpdateWorkStyles from "./Forms/OverviewStylesForm";
import UpdateWorkTitle from "./Forms/OverviewUpdateWorkTitleForm";
import UpdateWorkFontName from "./Forms/OverviewUpdateFontNameForm";

const WorkOverviewEdit = (props) => {
  let workColors =
    props.allWorks[props.allWorks.length - 1] &&
    props.allWorks[props.allWorks.length - 1].colors &&
    props.allWorks[props.allWorks.length - 1].colors.map((color) => {
      return (
        <div key={color._id} className="colorEllipse" style={{ background: color.color }}></div>
      );
    });

  let workStyle =
    props.allWorks[props.allWorks.length - 1] &&
    props.allWorks[props.allWorks.length - 1].textStyles &&
    props.allWorks[props.allWorks.length - 1].textStyles.map((style) => {
      return (
        <p
          key={style._id}
          className="workStyle"
          style={{ fontSize: style.size + "px", fontWeight: style.weight }}
        >
          {style.name}
        </p>
      );
    });

  return (
    <div className="workOverview">
      <UpdateWorkTitle allWorks={props.allWorks} onSubmit={props.updateWorkItem} />
      <div className="designInfo">
        <UpdateWorkFontName onSubmit={props.updateWorkItem} allWorks={props.allWorks} />
        <div className="workStyles">
          <h2>Text styles</h2>
          {workStyle}
          <UpdateWorkStyles onSubmit={props.createWorkStyle} />
        </div>
        <div className="workColors">
          <h2>Colors</h2>
          <div className="colorEllipses">{workColors}</div>
          <div className="editInput editEllipseColor">
            <input onChange={props.onColorChange} name="newColorData" type="color" />
            <button onClick={props.createWorkColor}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOverviewEdit;
