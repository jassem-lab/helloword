const setCurrentArticleType = "ARTICLESREDUCER/CHANGE-ARTICLE-ID";
const setCurrentArticleName = "ARTICLESREDUCER/SET-CURRENT-ARTICLE-NAME";
const setArticleData = "ARTICLESREDUCER/SET-ARTICLE-DATA";
const setBlocksData = "ARTICLESREDUCER/SET-BLOCKS-DATA";
const setCurrentArticleBlockType = "ARTICLESREDUCER/SET-CURRENT-ARTICLE-BLOCK-TYPE";
const setBlocksImages = "ARTICLESREDUCER/SET-BLOCKS-IMAGES";
const setArticlesImages = "ARTICLESREDUCER/SET-ARTICLES-IMAGES";
const setBlocksLists = "ARTICLESREDUCER/SET-BLOCKS-LISTS";
const setBlocksTextAreas = "ARTICLESREDUCER/SET-BLOCKS-TEXT-AREAS";
const setCurrentArticleComments = "ARTICLESREDUCER/SET-CURRENT-ARTICLE-COMMENTS";
const setCommentAnswerId = "ARTICLESREDUCER/SET-COMMENT-ANSWERID";

let initialState = {
  currentArticleId: null,
  currentArticleName: null,
  currentBlockId: null,
  articles: [],
  images: [],
  blocks: [],
  blocksImages: [],
  blocksLists: [],
  blocksTextAreas: [],
  articleComments: [],
  currentCommentId: null,
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setArticleData:
      return {
        ...state,
        articles: action.newArticleData,
      };
    case setArticlesImages:
      return {
        ...state,
        images: action.newArticlesImages,
      };
    case setBlocksData:
      return {
        ...state,
        blocks: action.newBlocksData,
      };
    case setCurrentArticleBlockType:
      return {
        ...state,
        currentBlockId: action.currentBlockId,
      };
    case setBlocksImages:
      return {
        ...state,
        blocksImages: action.newBlocksImages,
      };
    case setBlocksLists:
      return {
        ...state,
        blocksLists: action.newBlocksLists,
      };
    case setBlocksTextAreas:
      return {
        ...state,
        blocksTextAreas: action.newBlocksTextAreas,
      };
    case setCurrentArticleType:
      return {
        ...state,
        currentArticleId: action.currentArticleId,
      };
    case setCurrentArticleName:
      return {
        ...state,
        currentArticleName: action.currentArticleName,
      };
    case setCurrentArticleComments:
      return {
        ...state,
        articleComments: action.currentArticleComments,
      };
    case setCommentAnswerId:
      return {
        ...state,
        currentCommentId: action.newCurrentCommentId,
      };
    default:
      return state;
  }
};

export const setArticleId = (currentArticleId) => {
  return {
    type: setCurrentArticleType,
    currentArticleId,
  };
};

export const setArticleName = (currentArticleName) => {
  return {
    type: setCurrentArticleName,
    currentArticleName,
  };
};

export const setArticles = (newArticleData) => {
  return {
    type: setArticleData,
    newArticleData,
  };
};

export const setArticlesMainImages = (newArticlesImages) => {
  return {
    type: setArticlesImages,
    newArticlesImages,
  };
};

export const setArticleBlocks = (newBlocksData) => {
  return {
    type: setBlocksData,
    newBlocksData,
  };
};

export const setCurrentBlockId = (currentBlockId) => {
  return {
    type: setCurrentArticleBlockType,
    currentBlockId,
  };
};

export const setArticleBlocksImages = (newBlocksImages) => {
  return {
    type: setBlocksImages,
    newBlocksImages,
  };
};

export const setArticleBlocksLists = (newBlocksLists) => {
  return {
    type: setBlocksLists,
    newBlocksLists,
  };
};

export const setArticleBlocksTextAreas = (newBlocksTextAreas) => {
  return {
    type: setBlocksTextAreas,
    newBlocksTextAreas,
  };
};

export const uploadCurrentArticleComments = (currentArticleComments) => {
  return {
    type: setCurrentArticleComments,
    currentArticleComments,
  };
};

export const uploadCurrentCommentId = (newCurrentCommentId) => {
  return {
    type: setCommentAnswerId,
    newCurrentCommentId,
  };
};

export default ArticlesReducer;
