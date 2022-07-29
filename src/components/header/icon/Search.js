import React, { useState, useEffect, useRef } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
// import SearchResult from '../search-result/SearchResult';

function Search({ keyword }) {
  const [isActive, setActive] = useState(false);

  function clickSearchIcon() {
    setActive(!isActive);
  }

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
      <IoSearchOutline className='header__icon' onClick={clickSearchIcon} />
      <input type='text' placeholder='Search here...' onChange={keyword} />
      {/* <IoCloseOutline className='header__icon--close' /> */}
    </div>
  );
}

export default Search;
