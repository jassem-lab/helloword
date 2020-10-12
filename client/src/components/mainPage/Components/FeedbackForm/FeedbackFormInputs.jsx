import React from "react";
import "../../MainPage.css";
import { Field } from "redux-form";

const FeedbackFormInputs = () => {
  return (
    <div className="contactForm">
      <Field placeholder="Your beautiful name" type="text" name="name" component="input" />
      <Field placeholder="Your number, please" type="tel" name="number" component="input" />
      <Field placeholder="Your email adress" type="email" name="email" component="input" />
      <Field placeholder="Leave your message" rows="5" name="message" component="textarea" />
    </div>
  );
};

export default FeedbackFormInputs;