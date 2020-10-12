import React from "react";
import "../../MainPage.css";
import { reduxForm } from "redux-form";
import FeedbackFormInputs from "./FeedbackFormInputs";
import FormContactInfo from "./FormContactInfo";

const FeedbackForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="contactWindow">
        <FeedbackFormInputs />
        <FormContactInfo />
      </div>
      <div className="buttonPage buttonSend">
        <button disabled={props.loading}>Send message</button>
      </div>
    </form>
  );
};

const FeedbackReduxForm = reduxForm({ form: "feedback" })(FeedbackForm);

export default FeedbackReduxForm;
