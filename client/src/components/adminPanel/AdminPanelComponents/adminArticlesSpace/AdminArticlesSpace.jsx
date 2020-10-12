import React from "react";
import "../../Admin.css";
import articleImg from "../../img/brain.jpg";
import CreateArticleForm from "./Forms/CreateArticleFormComponent";

const AdminArticlesSpace = (props) => {
  return (
    <div className="newArticleBlock wrapper">
      <div className="newArticleBlockImg">
        <img src={articleImg} alt="brain sides" />
      </div>
      <CreateArticleForm onSubmit={props.createArticle} />
    </div>
  );
};

export default AdminArticlesSpace;
