import React, { useState } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';

function Search() {
  const [isActive, setActive] = useState(false);
  function clickSearchIcon() {
    setActive(!isActive);
  }

  return (
    <div
      className={
        isActive ? 'header__icon-container' : 'header__icon-container--search'
      }
    >
      <IoSearchOutline className='header__icon' onClick={clickSearchIcon} />
      <input type='text' />
      {/* <IoCloseOutline className='header__icon--close' /> */}
    </div>
  );
}

export default Search;
