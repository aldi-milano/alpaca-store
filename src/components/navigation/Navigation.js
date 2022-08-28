import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Cart from './icon/Cart';
import Category from './icon/Category';
import Home from './icon/Home';
import Profile from './icon/Profile';
import Wishlist from './icon/Wishlist';

import './navigation.scss';

function Navigation({
  items,
  products,
  clearValue,
  isLogin,
  profile,
  profileImg,
}) {
  return (
    <nav className='nav'>
      <Link to='/'>
        <Home clearValue={clearValue} />
      </Link>
      <Link to='/categories'>
        <Category />
      </Link>
      <Link to='/cart'>
        <Cart items={items} />
      </Link>
      <Link to='/wishlist'>
        <Wishlist products={products} />
      </Link>
      <Link to={!isLogin ? `/profile` : `/profile/${profile.id}`}>
        <Profile profile={profile} />
      </Link>
    </nav>
  );
}

export default Navigation;
