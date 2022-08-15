import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SearchResult from './components/pages/search-result/SearchResult';
// import Wishlist from './components/wishlist/Wishlist';
import SharedLayout from './components/shared-layout/SharedLayout';
import Homepage from './components/pages/homepage/Homepage';
import Categories from './components/pages/categories/Categories';
import Category from './components/pages/categories/category/category';
import Cart from './components/pages/carts/Cart';
import Wishlist from './components/pages/wishlist/Wishlist';
import Profile from './components/pages/profile/Profile';
import './scss/style.scss';

function App() {
  const [state, setState] = useState({
    products: [],
    users: [],
    cart: [],
    wishlist: [],
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

  function onHandleAddtoCart(id) {
    const products = state.products.filter(product => product.id === id);
    setState({ ...state, cart: [...state.cart, ...products] });
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
      title: 'Item added to cart',
    });
  }

  function onHandleAddToWishlist(id) {
    const idx = state.products.findIndex(prod => prod.id === id);
    let wishlist = state.products[idx].wishlist;

    if (idx !== -1)
      state.products[idx].wishlist = !state.products[idx].wishlist;
    setState({ ...state });

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
    });
    Toast.fire({
      icon: 'success',
      title: !wishlist ? 'Added to wishlist' : 'Removed from wishlist',
    });
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
            <Route index element={<Homepage />} />
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
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='profile' element={<Profile />} />
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
