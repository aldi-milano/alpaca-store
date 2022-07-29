import React, { useRef, useEffect, useState } from 'react';
import Wishlist from '../navigation/icon/Wishlist';
import './card.scss';

function SearchItem({ title, price, img }) {
  const [spans, setSpans] = useState(0);

  const heightRef = useRef();

  useEffect(() => {
    const height = heightRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    setSpans(span);
  }, []);

  return (
    <div
      ref={heightRef}
      className='card'
      style={{ gridRowEnd: `span ${spans}` }}
    >
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
