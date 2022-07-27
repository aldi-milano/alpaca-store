import React from 'react';
import logo from '../../assets/logo/alpaca-logo.png';
import { IoCartOutline, IoHeartOutline, IoMenuOutline } from 'react-icons/io5';
import './header.scss';

function Header() {
  return (
    <>
      <header className='header'>
        <IoMenuOutline className='header__icon' />
        <a href='#'>
          <img src={logo} alt='logo alpaca' className='header__logo' />
        </a>
        <div className='header__icon-container'>
          <IoHeartOutline className='header__icon' />
          <IoCartOutline className='header__icon' />
        </div>
      </header>
    </>
  );
}

export default Header;
