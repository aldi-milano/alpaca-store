import { Link } from 'react-router-dom';

import Cart from './icon/Cart';
import Category from './icon/Category';
import Home from './icon/Home';
import Profile from './icon/Profile';
import Wishlist from './icon/Wishlist';

import './navigation.scss';

function Navigation({ items, products }) {
  return (
    <nav className='nav'>
      <Link to='/'>
        <Home />
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
      <Link to='/profile'>
        <Profile />
      </Link>
    </nav>
  );
}

export default Navigation;
