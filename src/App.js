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
    cart: [],
    keyword: '',
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setState({ ...state, products: data });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleKeyword = str => {
    setState({ ...state, keyword: str.target.value });
  };

  function onHandleAddtoCart(id) {
    const products = state.products.filter(product => product.id === id);
    setCart([...cart, ...products]);
    console.log(...products);
  }

  useEffect(() => {
    if (cart.length) {
      const price = cart.map(item => item.price).reduce((a, b) => a + b, 0);
      console.log(cart, Math.round(price * 14000).toLocaleString('id-ID'));
    }
  }, [cart]);

  return (
    <main>
      <Header keyword={onHandleKeyword} />
      <Hero />
      <Navigation />
      <SearchResult
        products={state.products}
        keyword={state.keyword}
        onHandleAddtoCart={onHandleAddtoCart}
      />
    </main>
  );
}

export default App;
