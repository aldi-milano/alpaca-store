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
    <>
      <Navigation
        items={items}
        products={products}
        clearValue={clearValue}
        isLogin={isLogin}
        profile={profile}
        profileImg={profileImg}
      />
      <Header keyword={keyword} clearValue={clearValue} />
      <Outlet />
    </>
  );
}

export default SharedLayout;
