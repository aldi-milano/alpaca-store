import React, { useRef, useEffect, useState } from 'react';
import Wishlist from '../navigation/icon/Wishlist';
import { IoCartOutline } from 'react-icons/io5';
import './card.scss';

function SearchItem({ title, price, img, onHandleAddtoCart, id }) {
  const [spans, setSpans] = useState(0);

  const heightRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      heightRef.current.addEventListener('load', getSpans());
    }, 500);
  }, []);

  function getSpans() {
    const height = heightRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  }

  return (
    <div
      ref={heightRef}
      className='card'
      style={{ gridRowEnd: `span ${spans}` }}
      id={id}
    >
      <div className='card__container-img'>
        <img src={img} alt='' className='img' />
      </div>
      <div className='card__desc'>
        <div className='container'>
          <p className='card__desc-price'>
            {Math.round(price * 14871).toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}
          </p>
          <Wishlist />
        </div>
        <p className='card__desc-title'>{title}</p>
        <div
          className='card__desc-button'
          id={id}
          onClick={() => onHandleAddtoCart(id)}
        >
          <IoCartOutline className='icon--cart' />
          <button className='button--cart'>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
