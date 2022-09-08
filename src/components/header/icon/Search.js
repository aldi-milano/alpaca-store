import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';

function Search({ keyword, clearValue }) {
  const navigate = useNavigate();
  const inputSearch = document.querySelector('.search-bar__input');

  function clearSearch() {
    inputSearch.value = '';
    navigate(-1);
    return clearValue();
  }

  const ref = useRef();

  return (
    <div ref={ref} className='search-bar'>
      <Link to='search'>
        <input
          type='text'
          className='search-bar__input'
          aria-label='search bar'
          placeholder='Search here...'
          onChange={keyword}
        />
        <button className='search-bar__submit'>
          <IoSearchOutline />
        </button>
        <button className='search-bar__close'>
          <IoCloseOutline onClick={clearSearch} />
        </button>
      </Link>
    </div>
  );
}

export default Search;
