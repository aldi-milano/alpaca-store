import React from 'react';

import { IoCartOutline } from 'react-icons/io5';

function Cart({ items }) {
  console.log(items);
  return (
    <div className='cart'>
      <IoCartOutline className='nav__icon--cart' />
      <div className={`indicator${items.length > 0 ? '--active' : ''}`}>
        {items.length}
      </div>
    </div>
  );
}

export default Cart;
