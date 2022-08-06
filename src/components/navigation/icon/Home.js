import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';

function Home() {
  return (
    <div className='flex'>
      <IoHomeOutline className='nav__icon' />
      <p className='nav__title'>Home</p>
    </div>
  );
}

export default Home;
