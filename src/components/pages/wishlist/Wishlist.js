import React, { useEffect, useRef, useState } from 'react';

import './wishlist.scss';
import WishlistCard from './WishlistCard';

// function Wishlist({ products }) {
//   products.filter(prod => prod.wishlist).forEach(prod => <p>{prod.title}</p>);
// }

function Wishlist({ products }) {
  return (
    <div className='result'>
      {products
        ?.filter(prod => prod.wishlist)
        .map(({ image, title, price, id }) => {
          console.log(title);
          return (
            <WishlistCard image={image} title={title} price={price} id={id} />
          );
        })}
    </div>
  );
}

export default Wishlist;
