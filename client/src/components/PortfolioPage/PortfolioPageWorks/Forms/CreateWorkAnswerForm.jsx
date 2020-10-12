import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateWorkAnswerForm = (props) => {
  return (
    <form className="createWorkCommentForm answerForm" onSubmit={props.handleSubmit}>
      <Field type="text" name="userName" placeholder="Guest name" component="input" />
      <div className="createWorkFormFlex"> 
        <Field
          name="CommentText"
          cols="30"
          rows="5"
          placeholder="Write what you think about the article"
          component="textarea"
        ></Field>
        <button>add</button>
      </div>
    </form>
  );
};

const UpdateWorkAnswerForm = reduxForm({ form: "updateWorkAnswerForm" })(CreateWorkAnswerForm);

export default UpdateWorkAnswerForm;
