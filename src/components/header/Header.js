import Profile from '../navigation/icon/Profile';
import Wishlist from '../navigation/icon/Wishlist';
import Cart from '../navigation/icon/Cart';

import { Link } from 'react-router-dom';

import Search from './icon/Search';

import logo from '../../assets/logo/alpaca-black.png';
import './header.scss';

// className='header__icon'

function Header({
  keyword,
  clearValue,
  items,
  products,
  isLogin,
  profile,
  profileImg,
}) {
  return (
    <>
      <header>
        <nav className='header'>
          <div className='header__icon-container'>
            <Link to='/'>
              <img src={logo} alt='logo alpaca' className='header__logo' />
            </Link>
          </div>
          <div className='header-navigation'>
            <Search keyword={keyword} clearValue={clearValue} />
            <div className='icon-navigation'>
              <Link to='/cart'>
                <Cart items={items} />
              </Link>
              <Link to='/wishlist'>
                <Wishlist products={products} />
              </Link>
              <Link to={!isLogin ? `/profile` : `/profile/${profile.id}`}>
                <Profile
                  profile={profile}
                  isLogin={isLogin}
                  profileImg={profileImg}
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
