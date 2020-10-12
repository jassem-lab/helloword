import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateArticleCommentForm = (props) => {
  return (
    <form className="createArticleCommentForm" onSubmit={props.handleSubmit}>
      <Field type="text" name="userName" placeholder="Guest name" component="input" />
      <div className="createArticleCommentFormFlex">
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

const UpdateArticleCommentForm = reduxForm({ form: "updateArticleCommentForm" })(
  CreateArticleCommentForm
);

export default UpdateArticleCommentForm;
