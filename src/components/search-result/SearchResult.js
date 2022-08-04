import React, { useEffect, useState } from 'react';
import Card from '../card/Card';

import './searchResult.scss';

function SearchResult({ searchItem, products, keyword, onHandleAddtoCart }) {
  console.log(searchItem);
  if (keyword.length > 0) {
    return (
      <div className='result'>
        {searchItem.map(({ title, image, price, id }) => (
          <Card
            title={title}
            img={image}
            price={price}
            key={id}
            onHandleAddtoCart={onHandleAddtoCart}
            id={id}
          />
        ))}
      </div>
    );
  }
}

export default SearchResult;
