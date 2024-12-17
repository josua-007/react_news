import { SAVE_ARTICLE, UNSAVE_ARTICLE } from "../actions";

const initialState = [];

const savedArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      return [...state, action.payload]; 
    case UNSAVE_ARTICLE:
      return state.filter((article) => article._id !== action.payload);
    default:
      return state;
  }
};

export default savedArticlesReducer;
