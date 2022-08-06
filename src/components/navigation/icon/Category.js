import React from 'react';
import { IoListOutline } from 'react-icons/io5';

function Category() {
  return (
    <div className='flex'>
      <IoListOutline className='nav__icon' />
      <p className='nav__title'>Category</p>
    </div>
  );
}

export default Category;
