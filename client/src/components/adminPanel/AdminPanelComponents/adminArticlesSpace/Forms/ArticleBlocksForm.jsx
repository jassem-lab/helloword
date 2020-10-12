import React from "react";
import { reduxForm, Field } from "redux-form";
import "../../../Admin.css";

const ArticleBlocksForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="wrapper">
      <h2 className="editImageDataTitle">Article blocks part</h2>
      <div className="editInput articleBlockTitle articleBlockMargin">
        <label htmlFor="title">Title of the block: </label>
        <Field placeholder="Block title" name="title" component="input" />
        <label htmlFor="titlePosition">Position of the title: </label>
        <div className="editFontStyle">
          <Field name="titlePosition" component="select">
            <option>Left</option>
            <option>Right</option>
            <option>Center</option>
          </Field>
        </div>
        <button>add</button>
      </div>
      <div className="editAboutProject">
        <Field
          name="text"
          component="textarea"
          placeholder="Enter your text of the block"
          rows="10"
        />
      </div>
    </form>
  );
};

const UpdateArticleData = reduxForm({ form: "updateArticleData" })(ArticleBlocksForm);

export default UpdateArticleData;
