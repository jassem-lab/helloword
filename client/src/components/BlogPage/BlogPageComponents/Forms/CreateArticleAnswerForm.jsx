import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateArticleAnswerForm = (props) => {
  return (
    <form className="createArticleCommentForm answerForm" onSubmit={props.handleSubmit}>
      <Field type="text" name="userName" placeholder="Guest name" component="input" />
      <div className="createArticleFormFlex">
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

const UpdateArticleAnswerForm = reduxForm({ form: "updateArticleAnswerForm" })(
  CreateArticleAnswerForm
);

export default UpdateArticleAnswerForm;
