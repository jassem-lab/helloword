import React, { useEffect } from "react";
import UpdateLatestArticleData from "./UpdateLatestArticleData";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import {
  setArticleId,
  setArticles,
  setArticlesMainImages,
  setArticleBlocks,
  setCurrentBlockId,
  setArticleBlocksImages,
  setArticleBlocksLists,
  setArticleBlocksTextAreas,
} from "../../../../Redux/ArticlesReducer";

const UpdateLatestArticleDataContainer = (props) => {
  const { request } = useHttp();
  useEffect(() => {
    const articles = async () => {
      const articlesResponse = await request("/api/articles", "GET", null);
      props.setArticles(articlesResponse);
      if (articlesResponse.length !== null) {
        const currentId = articlesResponse[articlesResponse.length - 1]._id;
        props.setArticleId(currentId);
      }
      if (props.currentArticleId !== null) {
        const articlesImages = await request(
          `/api/articles/getArticleMainImages/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticlesMainImages(articlesImages);
        const articlesBlocksresponse = await request(
          `/api/articles/getArticleBlockData/${props.currentArticleId}`,
          "GET",
          null
        );
        const currentBlockId = articlesBlocksresponse[articlesBlocksresponse.length - 1]._id;
        props.setCurrentBlockId(currentBlockId);
        props.setArticleBlocks(articlesBlocksresponse);
        const articlesBlocksImages = await request(
          `/api/articles/getArticleBlockImages/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocksImages(articlesBlocksImages);
        const articlesBlocksLists = await request(
          `/api/articles/getArticleBlockLists/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocksLists(articlesBlocksLists);
        const articlesBlocksTextAreas = await request(
          `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
          "GET",
          null
        );
        props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
      }
    };
    articles();
  }, [props.currentArticleId]);

  const addArticleBlock = async (formData) => {
    await request("/api/articles/createArticleBlock", "POST", {
      ...formData,
      owner: props.currentArticleId,
    });
    const getArticleBlocks = await request(
      `/api/articles/getArticleBlockData/${props.currentArticleId}`,
      "GET",
      null
    );
    const currentBlockId = getArticleBlocks[getArticleBlocks.length - 1]._id;
    props.setCurrentBlockId(currentBlockId);
    props.setArticleBlocks(getArticleBlocks);
    formData.title = null;
    formData.text = null;
  };

  const addArticleBlockListItem = async (formData) => {
    await request("/api/articles/createArticleBlockList", "POST", {
      ...formData,
      articleOwner: props.currentArticleId,
      blockOwner: props.currentBlockId,
    });
    const articlesBlocksLists = await request(
      `/api/articles/getArticleBlockLists/${props.currentArticleId}`,
      "GET",
      null
    );
    props.setArticleBlocksLists(articlesBlocksLists);
    const articlesBlocksTextAreas = await request(
      `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
      "GET",
      null
    );
    props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
    formData.title = null;
  };

  const addArticleBlockTextArea = async (formData) => {
    await request("/api/articles/createArticleBlockTextArea", "POST", {
      ...formData,
      articleOwner: props.currentArticleId,
      blockOwner: props.currentBlockId,
    });
    const articlesBlocksTextAreas = await request(
      `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
      "GET",
      null
    );
    props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
    formData.text = null;
  };
  return (
    <div>
      <UpdateLatestArticleData
        currentArticleId={props.currentArticleId}
        articles={props.allArticles}
        articleImages={props.articleImages}
        blocks={props.blocks}
        blocksImages={props.blocksImages}
        blocksLists={props.blocksLists}
        blocksTextAreas={props.blocksTextAreas}
        addArticleBlock={addArticleBlock}
        addArticleBlockListItem={addArticleBlockListItem}
        addArticleBlockTextArea={addArticleBlockTextArea}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    allArticles: state.articles.articles,
    currentArticleId: state.articles.currentArticleId,
    articleImages: state.articles.images,
    blocks: state.articles.blocks,
    currentBlockId: state.articles.currentBlockId,
    blocksImages: state.articles.blocksImages,
    blocksLists: state.articles.blocksLists,
    blocksTextAreas: state.articles.blocksTextAreas,
  };
};

export default connect(mapStateToProps, {
  setArticleId,
  setArticles,
  setArticlesMainImages,
  setArticleBlocks,
  setCurrentBlockId,
  setArticleBlocksImages,
  setArticleBlocksLists,
  setArticleBlocksTextAreas,
})(UpdateLatestArticleDataContainer);
