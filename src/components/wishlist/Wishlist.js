import React from 'react';
import Card from '../card/Card';

import './wishlist.scss';

function Wishlist({ products }) {
  products
    .filter(prod => prod.wishlist === true)
    .map(({ title, image, price, id, wishlist }) => {
      return (
        <div className='wishlist'>
          <Card
            title={title}
            img={image}
            price={price}
            key={id}
            // onHandleAddtoCart={onHandleAddtoCart}
            // updateStateActive={updateStateActive}
            id={id}
            // onHandleAddToWishlist={onHandleAddToWishlist}
            wishlist={wishlist}
          />
        </div>
      );
    });
}

export default Wishlist;
