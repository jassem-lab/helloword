import React from "react";
import { reduxForm, Field } from "redux-form";

const DetailesTechnologiesForm = (props) => {
  return (
    <form className="detailsInfo" onSubmit={props.handleSubmit}>
      <h3>TECHNOLOGY USED</h3>
      <p>
        {props.allWorks[props.allWorks.length - 1] &&
          props.allWorks[props.allWorks.length - 1].technologyUsed}
      </p>
      <div className="editInput">
        <Field placeholder="Used technologies" name="technologyUsed" component="textarea" />
        <button>add</button>
      </div>
    </form>
  );
};

const SetTechnologies = reduxForm({ form: "updateTechnologies" })(DetailesTechnologiesForm);

export default SetTechnologies;
