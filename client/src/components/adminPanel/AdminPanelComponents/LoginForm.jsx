import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="signInForm">
      <p>Username</p>
      <Field placeholder="Login" name="email" component="input" />
      <p>Password</p>
      <Field placeholder="Password" name="password" component="input" type="password" />
      <button>Sign in</button>
    </form>
  );
};

const SignInReduxForm = reduxForm({ form: "signIn" })(LoginForm);

export default SignInReduxForm;
