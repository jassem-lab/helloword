import React from "react";
import { reduxForm, Field } from "redux-form";

const CreateArticleFormComponent = (props) => {
  return (
    <form className="articlesSpace" onSubmit={props.handleSubmit}>
      <h1>Create article</h1>
      <div className="createArticleMainInfoForm">
        <Field name="articleName" placeholder="New article name" component="input"></Field>
        <Field name="urlAdress" placeholder="New article url" component="input"></Field>
        <Field
          name="articleSmallDescription"
          placeholder="Small description of article"
          cols="30"
          rows="10"
          component="textarea"
        ></Field>
        <div className="buttonPage">
          <button>Create</button>
        </div>
      </div>
    </form>
  );
};

const CreateArticleForm = reduxForm({ form: "updateTechnologies" })(CreateArticleFormComponent);

export default CreateArticleForm;
