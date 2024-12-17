import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { useDispatch } from 'react-redux';
import { saveArticle } from '../redux/actions';

const Indonesia = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const urls = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${process.env.REACT_APP_NEWS_API_KEY}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(urls)
      .then((response) => {
        const filteredArticles = response.data.response.docs;
        setArticles(filteredArticles);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [urls]);

  return (
    <div className="container mt-4">
      <h1>Indonesia News</h1>
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-3">
          {articles.map((article) => (
            <NewsCard
              key={article.web_url}
              article={article}
              onSave={(article) => dispatch(saveArticle(article))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Indonesia;
