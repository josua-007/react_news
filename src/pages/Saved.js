import React from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';

const Saved = () => {
  const savedArticles = useSelector((state) => state.savedArticles);

  return (
    <div className="container mt-4">
      <h1>Saved Articles</h1>
      <div className="row row-cols-3">
        {savedArticles.length > 0 ? (
          savedArticles.map((article, index) => <NewsCard key={index} article={article} />)
        ) : (
          <p>No saved articles</p>
        )}
      </div>
    </div>
  );
};

export default Saved;
