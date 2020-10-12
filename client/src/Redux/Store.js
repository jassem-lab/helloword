import { createStore, combineReducers, applyMiddleware } from "redux";
import worksReducer from "./WorksReducer";
import articlesReducer from "./ArticlesReducer";
import { reducer as formReducer } from "redux-form";
import AdminReducer from "./AdminReducer";
import thunkMiddleWare from "redux-thunk";
import FeedbackReducer from "./FeedbackReducer";

let reducers = combineReducers({
  works: worksReducer,
  articles: articlesReducer,
  admin: AdminReducer,
  feedback: FeedbackReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
