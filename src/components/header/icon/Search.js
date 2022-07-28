import React, { useState, useEffect, useRef } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import SearchResult from '../search-result/SearchResult';

function Search() {
  const [isActive, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

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

  useEffect(() => {
    (async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      setProducts(data);
    })();
  }, [query]);

  // products.map(res => console.log(res.title));

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div
        ref={ref}
        className={`header__icon-container${isActive ? '--active' : ''}`}
      >
        <IoSearchOutline className='header__icon' onClick={clickSearchIcon} />
        <input
          type='text'
          placeholder='Search here...'
          onChange={handleOnChange}
          value={query}
        />
        {/* <IoCloseOutline className='header__icon--close' /> */}
      </div>
      <div>
        {products
          .filter(res => {
            return res.title.toLowerCase().includes(query.toLowerCase());
          })
          .map(({ title, image, id }) => {
            console.log(title);
            return (
              <SearchResult
                query={query}
                title={title}
                image={image}
                key={id}
                products={products}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Search;
