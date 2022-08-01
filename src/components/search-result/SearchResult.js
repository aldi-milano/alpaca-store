import React from 'react';
import Card from '../card/Card';

import './searchResult.scss';

function SearchResult({ products, keyword, onHandleAddtoCart }) {
  if (keyword.length > 0) {
    return (
      <div className='result'>
        {products
          .filter(product =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .map(({ title, image, price, id }) => (
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
