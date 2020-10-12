const feedbackError = "FEEDBACKREDUCER/FEEDBACKERROR";
const setFeedbacksData = "FEEDBACKREDUCER/SET-FEEDBACKS-DATA";

let initialState = {
  Messages: [],
  error: null,
  status: false,
};

const FeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case setFeedbacksData:
      return {
        ...state,
        Messages: action.feedbackData,
      };
    default:
      return state;
  }
};

export const setFeedbacks = (feedbackData) => {
  return {
    type: setFeedbacksData,
    feedbackData,
  };
};

export const setError = (error) => {
  return {
    type: feedbackError,
    error,
  };
};

export default FeedbackReducer;
