import React, { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import SearchResult from './components/search-result/SearchResult';
import Wishlist from './components/wishlist/Wishlist';
import './scss/style.scss';

function App() {
  const [state, setState] = useState({
    products: [],
    users: [],
    cart: [],
    wishlist: [],
    item: [],
    isActive: false,
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
        const result = await data;
        const [products, users] = result;
        products.forEach(prod => (prod.wishlist = false));
        setState({ ...state, products, users });
      })();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const item = state.products.filter(prod =>
      prod.title.toLowerCase().includes(state.keyword.toLowerCase())
    );
    setState({ ...state, item });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.keyword]);

  const onHandleKeyword = str => {
    setState({ ...state, keyword: str.target.value });
  };

  function onHandleAddtoCart(id) {
    const products = state.products.filter(product => product.id === id);
    setState({ ...state, cart: [...state.cart, ...products] });
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      // timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: 'Item added to cart',
    });
  }

  function onHandleAddToWishlist(id) {
    const idx = state.products.findIndex(prod => prod.id === id);
    let wishlist = state.products[idx].wishlist;
    console.log(wishlist);

    if (idx !== -1)
      state.products[idx].wishlist = !state.products[idx].wishlist;
    setState({ ...state });

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
    });
    Toast.fire({
      icon: 'success',
      title: !wishlist ? 'Added to wishlist' : 'Removed from wishlist',
    });
  }

  const onHandleClearValue = () => setState({ ...state, keyword: '' });

  return (
    <main className='main'>
      <Header
        keyword={onHandleKeyword}
        clearValue={onHandleClearValue}
        className='header'
      />
      {/* <Hero keyword={state.keyword} /> */}
      <SearchResult
        item={state.item}
        keyword={state.keyword}
        onHandleAddtoCart={onHandleAddtoCart}
        onHandleAddToWishlist={onHandleAddToWishlist}
      />
      {/* <Wishlist products={state.products} /> */}
      <Navigation items={state.cart} products={state.products} />
    </main>
  );
}

export default App;
