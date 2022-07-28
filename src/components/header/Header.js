import React from 'react';
import Menu from './icon/Menu';
import Search from './icon/Search';

import logo from '../../assets/logo/alpaca-black.png';
import './header.scss';

// className='header__icon'

function Header() {
  return (
    <>
      <header>
        <nav className='header'>
          <div className='header__icon-container' style={{ gap: '1rem' }}>
            <Menu />
            <img src={logo} alt='logo alpaca' className='header__logo' />
          </div>
          <Search />
        </nav>
      </header>
    </>
  );
}

export default Header;
