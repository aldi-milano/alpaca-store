import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import SearchResult from './components/search-result/SearchResult';
import './scss/style.scss';

function App() {
  const [state, setState] = useState({
    products: [],
    keyword: '',
  });

  useEffect(() => {
    (async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setState({ ...state, products: data });
      console.log(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleKeyword = str => {
    setState({ ...state, keyword: str.target.value });
  };

  return (
    <main>
      <Header keyword={onHandleKeyword} />
      <Hero />
      <Navigation />
      <SearchResult products={state.products} keyword={state.keyword} />
    </main>
  );
}

export default App;
