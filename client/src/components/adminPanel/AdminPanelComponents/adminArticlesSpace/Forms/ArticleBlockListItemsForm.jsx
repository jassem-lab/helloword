import React from "react";
import { reduxForm, Field } from "redux-form";
import "../../../Admin.css"

const ArticleBlockListItemsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="articleBlockAdditionalData wrapper">
      <h2 className="editImageDataTitle">Add block list items</h2>
      <div className="editInput articleBlockTitle articleBlockMargin">
        <label htmlFor="title">Title of the block: </label>
        <Field placeholder="Block title" name="title" component="input" />
        <button>add</button>
      </div>
    </form>
  );
};

const UpdateArticleBlockListItems = reduxForm({ form: "updateArticleBlockListItems" })(
  ArticleBlockListItemsForm
);

export default UpdateArticleBlockListItems;
