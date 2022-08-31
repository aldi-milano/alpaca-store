import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Confirmation from './components/pages/confirmation/Confirmation';

function App() {
  const [state, setState] = useState({
    products: [],
    users: [],
    cart: [],
    item: [],
    profile: {},
    isLogin: false,
    keyword: '',
    profileImg: null,
  });

  function getJSON(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

      return response.json();
    });
  }

  // FETCH ALL DATA
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

  //SEARCHING ITEM HANDLER
  useEffect(() => {
    const item = state.products.filter(prod =>
      prod.title.toLowerCase().includes(state.keyword.toLowerCase())
    );
    setState({ ...state, item });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.keyword]);

  const onHandleKeyword = str =>
    setState({ ...state, keyword: str.target.value });

  //////////////////////////////////////////

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

  // CART PAGES HANDLER
  function onHandleAddtoCart(id) {
    setState(prevState => {
      const cartItem = state.cart.find(item => item.id === id);
      if (cartItem) {
        return {
          ...prevState,
          cart: state.cart.map(item =>
            item.id === id
              ? {
                  ...item,
                  qty: item.qty + 1,
                  subtotal: !item.subtotal ? item.price : item.qty * item.price,
                }
              : item
          ),
        };
      }
      toast('Item added to cart');

      const product = state.products.find(item => item.id === id);
      const productToAdd = { ...product };
      productToAdd.cartID = new Date().toISOString();
      productToAdd.qty = 1;
      productToAdd.subtotal = productToAdd.price * productToAdd.qty;
      return { ...prevState, cart: [...state.cart, productToAdd] };
    });
  }

  function removeFromCart(cartID) {
    const idx = state.cart.findIndex(c => c.cartID === cartID);
    Swal.fire({
      // title: 'Discard Item?',
      text: 'Remove this item from cart?',
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
        state.cart.splice(idx, 1);
        setState({ ...state });
        Swal.fire('', 'Item Removed', 'success');
      }
    });
  }

  function incrementHandler(cartID) {
    const cartItem = state.cart.findIndex(item => item.cartID === cartID);
    const item = state.cart[cartItem];
    item.qty++;
    item.subtotal = item.qty * item.price;
    setState({ ...state, cart: [...state.cart] });
  }

  function decrementHandler(cartID) {
    const cartItem = state.cart.findIndex(item => item.cartID === cartID);
    const item = state.cart[cartItem];
    item.qty--;
    if (state.cart[cartItem].qty < 1) state.cart[cartItem].qty = 1;
    item.subtotal = item.qty * item.price;
    setState({ ...state, cart: [...state.cart] });
  }

  /////////////////////////////////////////////

  //WISHLIST HANDLER
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

    /////////////////////////////////////////

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
                profileImg={state.profileImg}
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
            <Route
              path='cart'
              element={
                <Cart
                  cart={state.cart}
                  removeFromCart={removeFromCart}
                  incrementHandler={incrementHandler}
                  decrementHandler={decrementHandler}
                  isLogin={state.isLogin}
                />
              }
            />
            <Route
              path='confirmation'
              element={
                <Confirmation cart={state.cart} profile={state.profile} />
              }
            />
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
