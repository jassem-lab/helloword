import React from "react";
import { reduxForm, Field } from "redux-form";

const OverviewUpdateWorkTitleForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="workTitle">
      <h2>ABOUT PROJECT</h2>
      <p>
        {props.allWorks[props.allWorks.length - 1] &&
          props.allWorks[props.allWorks.length - 1].aboutProject}
      </p>
      <div className="editAboutProject">
        <Field placeholder="About project" name="aboutProject" component="textarea" />
        <button>save</button>
      </div>
    </form>
  );
};

const UpdateWorkTitle = reduxForm({ form: "updateStyles" })(OverviewUpdateWorkTitleForm);

export default UpdateWorkTitle;
