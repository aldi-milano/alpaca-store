import React from 'react';
import Menu from './icon/Menu';
import Cart from './icon/Cart';
import Wishlist from './icon/Wishlist';
import Search from './icon/Search';
import Profile from './icon/Profile';

import logo from '../../assets/logo/alpaca-logo-white.png';
import './header.scss';

// className='header__icon'

function Header() {
  return (
    <>
      <header className='header'>
        <div className='header__icon-container'>
          <Menu />
          <Search />
        </div>
        <img src={logo} alt='logo alpaca' className='header__logo' />
        <div className='header__icon-container'>
          <Wishlist />
          <Cart />
          <Profile />
        </div>
      </header>
    </>
  );
}

export default Header;
