export const SAVE_ARTICLE = "SAVE_ARTICLE";
export const UNSAVE_ARTICLE = "UNSAVE_ARTICLE";

export const saveArticle = (article) => ({
  type: SAVE_ARTICLE,
  payload: article,
});

export const unsaveArticle = (articleId) => ({
  type: UNSAVE_ARTICLE,
  payload: articleId,
});
