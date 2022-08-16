import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
function SharedLayout({ keyword, clearValue, items, products }) {
  return (
    <>
      <Navigation items={items} products={products} clearValue={clearValue} />
      <Header keyword={keyword} clearValue={clearValue} />
      <Outlet />
    </>
  );
}

export default SharedLayout;
