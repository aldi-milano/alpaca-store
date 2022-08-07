import React from 'react';

import { IoCartOutline } from 'react-icons/io5';

function Cart({ items }) {
  return (
    <div className='notification flex'>
      <IoCartOutline className='nav__icon--cart' />
      <div className={`indicator${items.length > 0 ? '--active' : ''}`}>
        {items.length}
      </div>
      <p className='nav__title'>Cart</p>
    </div>
  );
}

export default Cart;
