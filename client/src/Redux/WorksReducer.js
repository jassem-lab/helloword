const setWorkData = "WORKSREDUCER/SET/WORK/DATA";
const setWorkStyle = "WORKSREDUCER/SET-WORK-STYLE";
const setWorkColors = "WORKSREDUCER/SET-WORK-COLORS";
const setPointWhatIDid = "WORKSREDUCER/SET-POINT-WHATIDID";
const setCurrentWorkName = "WORKSREDUCER/SET-CURRENT-WORK-NAME";
const setCurrentWorkType = "WORKSREDUCER/SET-WORK-ID";
const setImages = "WORKSREDUCER/SET-IMAGES";
const setCurrentWorkComments = "WORKSREDUCER/SET-CURRENT-WORK-COMMENTS";
const setCommentAnswerId = "WORKSREDUCER/SET-COMMENT-ANSWER-ID";

let initialState = {
  works: [],
  currentWorkId: null,
  currentWorkName: null,
  currentCommentId: null,
  workComments: [],
  images: [],
};

const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentWorkType:
      return {
        ...state,
        currentWorkId: action.currentWorkId,
      };
    case setCurrentWorkName:
      return {
        ...state,
        currentWorkName: action.currentWorkName,
      };
    case setWorkData:
      return {
        ...state,
        works: action.workData,
      };
    case setWorkStyle:
      return {
        ...state,
        works: state.works.map((work) => {
          if (work._id === state.currentWorkId) {
            return {
              ...work,
              textStyles: action.newStylesData,
            };
          }
          return work;
        }),
      };
    case setWorkColors:
      return {
        ...state,
        works: state.works.map((work) => {
          if (work._id === state.currentWorkId) {
            return {
              ...work,
              colors: action.newColorData,
            };
          }
          return work;
        }),
      };
    case setPointWhatIDid:
      return {
        ...state,
        works: state.works.map((work) => {
          if (work._id === state.currentWorkId) {
            return {
              ...work,
              whatIDid: action.newPoint,
            };
          }
          return work;
        }),
      };
    case setImages:
      return {
        ...state,
        images: action.imagesData,
      };
    case setCurrentWorkComments:
      return {
        ...state,
        workComments: action.currentWorkComments,
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

export const setWork = (workData) => {
  return {
    type: setWorkData,
    workData,
  };
};

export const setWorkId = (currentWorkId) => {
  return {
    type: setCurrentWorkType,
    currentWorkId,
  };
};

export const setWorkName = (currentWorkName) => {
  return {
    type: setCurrentWorkName,
    currentWorkName,
  };
};

export const setStyle = (newStylesData) => {
  return {
    type: setWorkStyle,
    newStylesData,
  };
};

export const setColor = (newColorData) => {
  return {
    type: setWorkColors,
    newColorData,
  };
};

export const setWhatIDid = (newPoint) => {
  return {
    type: setPointWhatIDid,
    newPoint,
  };
};

export const setImagesData = (imagesData) => {
  return {
    type: setImages,
    imagesData,
  };
};

export const uploadCurrentWorkComments = (currentWorkComments) => {
  return {
    type: setCurrentWorkComments,
    currentWorkComments,
  };
};

export const uploadCurrentCommentId = (newCurrentCommentId) => {
  return {
    type: setCommentAnswerId,
    newCurrentCommentId,
  };
};

export default worksReducer;
