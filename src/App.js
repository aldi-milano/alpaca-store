import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SharedLayout from './components/shared-layout/SharedLayout';
import Homepage from './components/pages/homepage/Homepage';
import Categories from './components/pages/categories/Categories';
import Category from './components/pages/categories/category/category';
import Cart from './components/pages/carts/Cart';
import Wishlist from './components/pages/wishlist/Wishlist';
import SingleProduct from './components/pages/single-product/SingleProduct';
import './scss/style.scss';
import Visitor from './components/pages/profile/visitor/Visitor';
import User from './components/pages/profile/user/User';

function App() {
  const [state, setState] = useState({
    products: [],
    users: [],
    user: {},
    cart: [],
    item: [],
    profile: {},
    isLogin: false,
    keyword: '',
    profileImg: '',
  });

  function getJSON(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

      return response.json();
    });
  }

  useEffect(() => {
    try {
      (async () => {
        const data = Promise.all([
          getJSON(`https://fakestoreapi.com/products`),
          getJSON('https://fakestoreapi.com/users'),
          getJSON(`https://tinyfac.es/api/data?limit=1&quality=0`),
        ]);
        const result = await data;
        const [products, users, profileImg] = result;
        products.forEach(prod => (prod.wishlist = false));
        setState({ ...state, products, users, profileImg });
      })();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const item = state.products.filter(prod =>
      prod.title.toLowerCase().includes(state.keyword.toLowerCase())
    );
    setState({ ...state, item });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.keyword]);

  const onHandleKeyword = str =>
    setState({ ...state, keyword: str.target.value });

  const toast = str => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      // timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: str,
    });
  };

  function onHandleAddtoCart(id) {
    const products = state.products.filter(product => product.id === id);
    setState({ ...state, cart: [...state.cart, ...products] });
    toast('Item added to cart');
  }

  function onHandleAddToWishlist(id) {
    const idx = state.products.findIndex(prod => prod.id === id);
    let wishlist = state.products[idx].wishlist;

    if (idx !== -1)
      state.products[idx].wishlist = !state.products[idx].wishlist;
    setState({ ...state });

    wishlist ? toast('Removed from wishlist') : toast('Added to wishlist');
  }

  function onHandleRemoveFromWishlist(id) {
    const idx = state.products.findIndex(prod => prod.id === id);

    Swal.fire({
      // title: 'Discard Item?',
      text: 'Discard this item from wishlist?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      buttonsStyling: true,
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(result => {
      if (result.isConfirmed) {
        if (idx !== -1) state.products[idx].wishlist = false;
        setState({ ...state });
        Swal.fire('', 'Item Discarded', 'success');
      }
    });
    console.log(state.products);
  }

  const onHandleClearValue = () => setState({ ...state, keyword: '' });
  const isLoginHandler = (bool, data) =>
    setState({ ...state, isLogin: bool, profile: data });

  function logoutHandler() {
    setState({ ...state, isLogin: false });
  }

  return (
    <main className='main'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <SharedLayout
                keyword={onHandleKeyword}
                clearValue={onHandleClearValue}
                items={state.cart}
                products={state.products}
                isLogin={state.isLogin}
                profile={state.profile}
              />
            }
          >
            <Route
              index
              element={
                <Homepage
                  item={state.item}
                  keyword={state.keyword}
                  onHandleAddtoCart={onHandleAddtoCart}
                  onHandleAddToWishlist={onHandleAddToWishlist}
                />
              }
            />
            <Route
              path='/:prodId'
              element={
                <SingleProduct
                  products={state.products}
                  onHandleAddToWishlist={onHandleAddToWishlist}
                  onHandleAddtoCart={onHandleAddtoCart}
                />
              }
            />
            <Route path='categories' element={<Categories />} />
            <Route
              path='categories/:category'
              element={
                <Category
                  products={state.products}
                  onHandleAddtoCart={onHandleAddtoCart}
                  onHandleAddToWishlist={onHandleAddToWishlist}
                />
              }
            />
            <Route path='cart' element={<Cart />} />
            <Route
              path='wishlist'
              element={
                <Wishlist
                  products={state.products}
                  onHandleAddtoCart={onHandleAddtoCart}
                  onHandleRemoveFromWishlist={onHandleRemoveFromWishlist}
                />
              }
            />
            <Route
              path='profile'
              element={
                <Visitor users={state.users} isLoginHandler={isLoginHandler} />
              }
            />
            <Route
              path='profile/:userId'
              element={
                <User
                  users={state.users}
                  profileImg={state.profileImg}
                  logoutHandler={logoutHandler}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
