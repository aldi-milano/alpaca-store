import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

function SharedLayout({
  keyword,
  clearValue,
  items,
  products,
  isLogin,
  profile,
  profileImg,
}) {
  return (
    <div className='shared'>
      {/* <Header
        keyword={keyword}
        clearValue={clearValue}
        items={items}
        products={products}
        isLogin={isLogin}
        profile={profile}
        profileImg={profileImg}
      /> */}
      <Navigation
        items={items}
        products={products}
        clearValue={clearValue}
        isLogin={isLogin}
        profile={profile}
        profileImg={profileImg}
      />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
