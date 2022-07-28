import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import './scss/style.scss';

function App() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();
  //     console.log(data);
  //     setProducts(data);
  //   })();
  // }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Navigation />
    </main>
  );
}

export default App;
