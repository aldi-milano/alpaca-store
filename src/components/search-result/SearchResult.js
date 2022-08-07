import React from 'react';
import Card from '../card/Card';

import notFound from '../../assets/illustration/not-found.png';

import './searchResult.scss';

function SearchResult({
  item,
  keyword,
  onHandleAddtoCart,
  updateStateActive,
  onHandleAddToWishlist,
}) {
  if (keyword.length > 1 && item.length === 0) {
    return (
      <div className='result--error'>
        <img src={notFound} alt='' className='img' />
        <p className='title'>
          Sorry, we couldn't find any matches for '<strong>{keyword}</strong>'.
        </p>
      </div>
    );
  }

  if (keyword.length > 0) {
    return (
      <div className='result'>
        {item.map(({ title, image, price, id, wishlist }) => (
          <Card
            title={title}
            img={image}
            price={price}
            key={id}
            onHandleAddtoCart={onHandleAddtoCart}
            updateStateActive={updateStateActive}
            id={id}
            onHandleAddToWishlist={onHandleAddToWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
    );
  }
}

export default SearchResult;
