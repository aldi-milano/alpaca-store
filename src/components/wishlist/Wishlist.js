import React from 'react';

import './wishlist.scss';

function Wishlist({ products }) {
  products
    .filter(prod => prod.wishlist === true)
    ?.map(prod => console.log(prod));
  return (
    <div className='wishlist'>
      <h1>This is wishlist.</h1>
    </div>
  );
}

export default Wishlist;
