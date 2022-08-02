import React, { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
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
  // const [cart, setCart] = useState([]);

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

  const onHandleAddtoCart = id => {
    const products = state.products.filter(product => product.id === id);
    setState({ ...state, cart: [...state.cart, ...products] });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Item added to cart',
      // footer: '<a href="">See the cart</a>',
    });
    console.log(...products);
  };

  useEffect(() => {
    if (state.cart.length) {
      const price = state.cart
        .map(item => item.price)
        .reduce((a, b) => a + b, 0);
      console.log(
        state.cart,
        Math.round(price * 14000).toLocaleString('id-ID')
      );
    }
  }, [state.cart]);

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
