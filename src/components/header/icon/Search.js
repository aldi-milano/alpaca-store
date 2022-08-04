import React, { useState, useEffect, useRef } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
// import SearchResult from '../search-result/SearchResult';

function Search({ keyword }) {
  const [isActive, setActive] = useState(false);
  const inputSearch = document.querySelector('.input');
  const iconClose = document.querySelector('.header__icon--close');

  function clickSearchIcon() {
    setActive(!isActive);
  }

  if (iconClose)
    iconClose.addEventListener('click', () => (inputSearch.value = ''));

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setActive(false);
    });
  }, []);

  return (
    <div
      ref={ref}
      className={`header__icon-container${isActive ? '--active' : ''}`}
    >
      <IoSearchOutline
        className='header__icon--search'
        onClick={clickSearchIcon}
      />
      <input
        type='text'
        placeholder='Search here...'
        onChange={keyword}
        className='input'
      />
      <IoCloseOutline className='header__icon--close' />
    </div>
  );
}

export default Search;
