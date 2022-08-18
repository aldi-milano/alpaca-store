import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SharedLayout from './components/shared-layout/SharedLayout';
import Homepage from './components/pages/homepage/Homepage';
import Categories from './components/pages/categories/Categories';
import Category from './components/pages/categories/category/category';
import Cart from './components/pages/carts/Cart';
import Wishlist from './components/pages/wishlist/Wishlist';
import Profile from './components/pages/profile/Profile';
import SingleProduct from './components/pages/single-product/SingleProduct';
import './scss/style.scss';
import Visitor from './components/pages/profile/visitor/Visitor';

function App() {
  const [state, setState] = useState({
    products: [],
    users: [],
    cart: [],
    item: [],
    refHeight: undefined,
    isActive: false,
    keyword: '',
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
        ]);
        const result = await data;
        const [products, users] = result;
        products.forEach(prod => (prod.wishlist = false));
        setState({ ...state, products, users });
        console.log(products);
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
            <Route path='profile' element={<Visitor />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Wishlist products={state.products} /> */}
      {/* <Navigation /> */}
      {/* <Header
        keyword={onHandleKeyword}
        clearValue={onHandleClearValue}
        className='header'
      />
      <Hero keyword={state.keyword} />
      <SearchResult
        item={state.item}
        keyword={state.keyword}
        onHandleAddtoCart={onHandleAddtoCart}
        onHandleAddToWishlist={onHandleAddToWishlist}
      />
      <Wishlist products={state.products} />
      <Navigation items={state.cart} products={state.products} /> */}
    </main>
  );
}

export default App;
