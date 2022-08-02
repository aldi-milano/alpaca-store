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
    users: [],
    cart: [],
    keyword: '',
  });

  function getJSON(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

      return response.json();
    });
  }

  useEffect(() => {
    try {
      (async () => {
        const data = Promise.all([
          getJSON('https://fakestoreapi.com/products'),
          getJSON('https://fakestoreapi.com/users'),
        ]);
        const response = await data;
        const [products, users] = response;
        setState({ ...state, products, users });
        console.log('This is products state:  ', products);
        console.log('This is users state: ', users);
      })();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleKeyword = str => {
    setState({ ...state, keyword: str.target.value });
  };

  const onHandleAddtoCart = id => {
    const products = state.products.filter(product => product.id === id);
    setState({ ...state, cart: [...state.cart, ...products] });
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-left',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: 'Item added to cart',
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
