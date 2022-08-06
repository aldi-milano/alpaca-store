import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

function Wishlist() {
  return (
    <div className='flex'>
      <IoHeartOutline className='nav__icon' />
      <p className='nav__title'>Wishlist</p>
    </div>
  );
}

export default Wishlist;
