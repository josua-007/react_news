import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { useDispatch } from 'react-redux';
import { saveArticle } from '../redux/actions';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios
        .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then((response) => setArticles(response.data.response.docs))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h1>Search Results for "{query}"</h1>
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
      <div className="row row-cols-3">
        {articles.length > 0 ? (
          articles.map((article) => (
            <NewsCard
              key={article.web_url}
              article={{ ...article, title: article.headline.main, url: article.web_url }}
              onSave={(article) => dispatch(saveArticle(article))}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      )}
    </div>
  );
};

export default SearchResults;
