import { combineReducers } from "redux";
import savedArticlesReducer from "./savedArticlesReducer";

const rootReducer = combineReducers({
  savedArticles: savedArticlesReducer, 
});

export default rootReducer;
