import React, { useState, useEffect, useRef } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
// import SearchResult from '../search-result/SearchResult';

function Search({ keyword, clearValue }) {
  // const [isActive, setActive] = useState(false);
  const inputSearch = document.querySelector('.search-bar__input');
  const iconClose = document.querySelector('.search-bar__close');

  // if (iconClose)
  //   iconClose.addEventListener('click', () => {
  //     inputSearch.value = '';
  //     return clearValue;
  //   });

  function clearSearch() {
    inputSearch.value = '';
    return clearValue();
  }

  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener('click', e => {
  //     if (ref.current?.contains(e.target)) {
  //       return;
  //     }
  //     setActive(false);
  //   });
  // }, []);

  // ${!isActive ? '--active' : ''}

  return (
    <div ref={ref} className='search-bar'>
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
    </div>
  );
}

export default Search;

// return (
//   <div ref={ref} className={`header__iconSearch-container`}>
//     <IoSearchOutline
//       className='header__icon--search'
//       onClick={clickSearchIcon}
//       />
//       <input
//       type='text'
//       placeholder='Search here...'
//       onChange={keyword}
//       className='input'
//       />
//     <IoCloseOutline className='header__icon--close' />
//     <div className='search-bar'>
//       <input
//         type='text'
//         className='search-bar__input'
//         aria-label='search input'
//       />
//       <button className='search-bar__submit'>
//         <IoSearchOutline />
//       </button>
//     </div>
//   </div>
// );
