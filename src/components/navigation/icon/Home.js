import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';

function Home({ clearValue }) {
  return (
    <div className='flex' onClick={clearValue}>
      <IoHomeOutline className='nav__icon' />
      <p className='nav__title'>Home</p>
    </div>
  );
}

export default Home;
