import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import Wishlist from '../navigation/icon/Wishlist';
import './card.scss';

function SearchItem({ title, price, img }) {
  const heightRef = useRef();

  useEffect(() => {
    console.log(heightRef.current.clientHeight);
  }, []);

  return (
    <div ref={heightRef} className='card'>
      <div className='card__container-img'>
        <img src={img} alt='' className='img' />
      </div>
      <div className='card__desc'>
        <div className='container'>
          <p className='card__desc-price'>{price}</p>
          <Wishlist />
        </div>
        <p className='card__desc-title'>{title}</p>
      </div>
    </div>
  );
}

export default SearchItem;
