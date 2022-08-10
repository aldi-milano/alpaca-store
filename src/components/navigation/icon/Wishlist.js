import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

function Wishlist({ products }) {
  const wishlist = products.filter(prod => prod.wishlist === true);
  return (
    <div className='notification flex'>
      <IoHeartOutline className='nav__icon' />
      <div
        className={`indicator__wishlist${
          wishlist.length > 0 ? '--active' : ''
        }`}
      >
        {wishlist.length}
      </div>
      <p className='nav__title'>Wishlist</p>
    </div>
  );
}

export default Wishlist;
