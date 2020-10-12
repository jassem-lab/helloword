import React from "react";
import ArticleFilePondForm from "./Forms/ArticleFilePondForm";
import UpdateArticleData from "./Forms/ArticleBlocksForm";
import ArticleBlockImageForm from "./Forms/ArticleBlockImageForm";
import ShowArticleDevelopingResults from "./ShowArticleDevelopingResults";
import UpdateArticleBlockListItems from "./Forms/ArticleBlockListItemsForm";
import UpdateArticleBlockTextArea from "./Forms/ArticleBlocksTextAreasForm";

const UpdateLatestArticleData = (props) => {
  return (
    <div className="UpdateLatestArticleData">
      <ArticleFilePondForm articles={props.articles} />
      <ShowArticleDevelopingResults
        currentArticleId={props.currentArticleId}
        articles={props.articles}
        articleImages={props.articleImages}
        blocks={props.blocks}
        blocksImages={props.blocksImages}
        blocksLists={props.blocksLists}
        blocksTextAreas={props.blocksTextAreas}
      />
      <UpdateArticleData onSubmit={props.addArticleBlock} />
      <UpdateArticleBlockListItems onSubmit={props.addArticleBlockListItem} />
      <UpdateArticleBlockTextArea onSubmit={props.addArticleBlockTextArea} />
      <ArticleBlockImageForm articles={props.articles} blocks={props.blocks} />
    </div>
  );
};

export default UpdateLatestArticleData;
