import SearchResult from '../search-result/SearchResult';
import Hero from './hero/Hero';
function Homepage({ item, keyword, onHandleAddtoCart, onHandleAddToWishlist }) {
  return (
    <>
      <Hero keyword={keyword} />
      {/* <SearchResult
        item={item}
        keyword={keyword}
        onHandleAddtoCart={onHandleAddtoCart}
        onHandleAddToWishlist={onHandleAddToWishlist}
      /> */}
    </>
  );
}

export default Homepage;
