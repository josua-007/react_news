import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { useDispatch } from 'react-redux';
import { saveArticle } from '../redux/actions';

const Programming = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const formattedDate = oneMonthAgo.toISOString().split('T')[0];
    setLoading(true);
    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=programming&begin_date=${formattedDate}&api-key=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then((response) => setArticles(response.data.response.docs))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Programming News</h1>
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
            article={{ ...article, title: article.headline.main, url: article.web_url }}
            onSave={(article) => dispatch(saveArticle(article))}
          />
        ))}
      </div>
      )}
    </div>
  );
};

export default Programming;
