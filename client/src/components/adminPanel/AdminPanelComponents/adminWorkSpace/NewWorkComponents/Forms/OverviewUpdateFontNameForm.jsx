import React from "react";
import { reduxForm, Field } from "redux-form";

const OverviewUpdateFontNameForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="workTypography">
      <h2>Typography</h2>
      <p>
        {props.allWorks[props.allWorks.length - 1] &&
          props.allWorks[props.allWorks.length - 1].fontName}
      </p>
      <div className="editInput">
        <div className="editOverviewDataInput">
          <Field placeholder="Font Name" name="fontName" component="input" />
        </div>
        <button>save</button>
      </div>
      <p>ABCDEFGIJKLMNOPQRSTUVWXYZ</p>
      <p>abcdefgijklmnopqrstuvwxyz</p>
    </form>
  );
};

const UpdateWorkFontName = reduxForm({ form: "updateFontName" })(OverviewUpdateFontNameForm);

export default UpdateWorkFontName;
