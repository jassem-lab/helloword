import React from "react";
import { reduxForm, Field } from "redux-form";
import "../../../Admin.css";

const ArticleBlocksTextAreasForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="articleBlockAdditionalData wrapper">
      <h2 className="editImageDataTitle">Add block list items</h2>
      <div className="editAboutProject articleBlockTitle articleBlockMargin">
        <label htmlFor="text">Title of the block: </label>
        <Field
          name="text"
          component="textarea"
          placeholder="Enter your text of the block"
          rows="10"
        />
        <button>add</button>
      </div>
    </form>
  );
};

const UpdateArticleBlockTextArea = reduxForm({ form: "updateArticleBlockTextArea" })(
  ArticleBlocksTextAreasForm
);

export default UpdateArticleBlockTextArea;
