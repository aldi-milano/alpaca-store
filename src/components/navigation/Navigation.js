import React from 'react';
import Cart from './icon/Cart';
import Category from './icon/Category';
import Home from './icon/Home';
import Profile from './icon/Profile';
import Wishlist from './icon/Wishlist';

import './navigation.scss';

function Navigation({ items }) {
  return (
    <nav className='nav'>
      <Home />
      <Category />
      <Cart items={items} />
      <Wishlist />
      <Profile />
    </nav>
  );
}

export default Navigation;
