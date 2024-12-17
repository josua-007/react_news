import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Indonesia from './pages/Indonesia';
import Programming from './pages/Programming';
import Saved from './pages/Saved';
import SearchResults from './pages/SearchResults';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Indonesia />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
