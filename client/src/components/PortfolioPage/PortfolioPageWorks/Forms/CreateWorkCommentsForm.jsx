import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateWorkCommentForm = (props) => {
  return (
    <form className="createWorkCommentForm" onSubmit={props.handleSubmit}>
      <Field type="text" name="userName" placeholder="Guest name" component="input" />
      <div className="createWorkCommentFormFlex">
        <Field
          name="CommentText" 
          cols="30"
          rows="10"
          placeholder="Write what you think about the article"
          component="textarea"
        ></Field>
        <button>add</button>
      </div>
    </form>
  );
};

const UpdateWorkCommentForm = reduxForm({ form: "updateWorkCommentForm" })(CreateWorkCommentForm);

export default UpdateWorkCommentForm;
