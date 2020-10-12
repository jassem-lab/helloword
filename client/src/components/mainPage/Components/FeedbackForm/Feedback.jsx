import React from "react";
import "../../MainPage.css";
import FeedbackReduxForm from "./FeedbackForm";

let Feedback = (props) => {
  return (
    <div className="contactMe contactMeOnPage wrapper">
      <div className="titleContact">
        <h2>Ways to contact me</h2>
        <hr />
        <p>
          You have a desire to get acquainted closer or to specify details? Use this form and i will
          surely answer you.
        </p>
      </div>
      <FeedbackReduxForm onSubmit={props.sendFeedback} loading={props.loading} />
      <p>{props.error}</p>
    </div>
  );
};

export default Feedback;
