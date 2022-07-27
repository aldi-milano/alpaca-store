import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './scss/style.scss';

function App() {
  const fetching = async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    const data = await res.json();
    console.log(data);
  };

  fetching();

  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}

export default App;
