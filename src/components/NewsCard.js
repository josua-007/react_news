import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { saveArticle, unsaveArticle } from "../redux/actions";

const NewsCard = ({ article, onSave }) => {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.savedArticles);

  const isSaved = savedArticles.some((saved) => saved._id === article._id);

  const handleSave = () => {
    dispatch(saveArticle(article));
    alert("Berhasil menyimpan artikel!");
  };

  const handleUnsave = () => {
    dispatch(unsaveArticle(article._id));
    alert("Berhasil menghapus artikel!");
  };

  const multimedia = article.multimedia || [];
  const imageUrl = multimedia.find((media) => media.subtype === 'xlarge')?.url;

  const imageSrc = imageUrl
    ? `https://www.nytimes.com/${imageUrl}`
    : 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <div className="col my-2">
      <div className="card h-100">
        <img
          src={imageSrc}
          className="card-img-top"
          alt={article.headline.main}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{article.headline.main}</h5>
          <p className="card-text">{article.abstract}</p>
          <div className="mt-auto">
            <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
              Read
            </a>
            {isSaved ? (
              <button className="btn btn-success" onClick={handleUnsave}>
                Unsave
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSave}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
