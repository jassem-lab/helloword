import React from "react";
import { Field, reduxForm } from "redux-form";

const DetailesWhatIDidForm = (props) => {
  let whatIDid =
    props.allWorks[props.allWorks.length - 1] &&
    props.allWorks[props.allWorks.length - 1].whatIDid &&
    props.allWorks[props.allWorks.length - 1].whatIDid.map((point) => {
      return <p key={point._id}> {point.name}</p>;
    });

  return (
    <form className="detailsInfo" onSubmit={props.handleSubmit}>
      <h3>WHAT I DID</h3>
      {whatIDid}
      <div className="editInput">
        <Field placeholder="What i did" name="newPoint" component="input" />
        <button onClick={props.setChangedPoint}>add</button>
      </div>
    </form>
  );
};

const SetDidPoint = reduxForm({ form: "createDidPoint" })(DetailesWhatIDidForm);

export default SetDidPoint;
