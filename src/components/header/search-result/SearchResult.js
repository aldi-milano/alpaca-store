import React from 'react';

import './searchresult.scss';

function SearchResult({ title, image, query }) {
  if (query.length > 1) {
    return (
      <div className='search-result'>
        <img src={image} alt={title} className='search-result__img' />
        <p className='search-result__title'>{title}</p>
      </div>
    );
  }
}

export default SearchResult;
