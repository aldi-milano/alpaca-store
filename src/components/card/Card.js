import React, { useRef, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { IoCartOutline, IoHeartOutline, IoHeart } from 'react-icons/io5';
import './card.scss';

function SearchItem({ title, price, img, onHandleAddtoCart, id }) {
  const [spans, setSpans] = useState(0);
  const [active, setActive] = useState(false);

  const heightRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      heightRef.current.addEventListener('load', getSpans());
    }, 700);
  }, []);

  function getSpans() {
    const height = heightRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  }

  function onHandleWishlist() {
    setActive(!active);
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      // timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: 'Item added to wishlist',
    });
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
            {Math.round(price * 14000).toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}
          </p>
          <IoHeartOutline
            className={`icon__wishlist${active ? '--active' : ''}`}
            onClick={onHandleWishlist}
          />
          <IoHeart
            className={`icon__wishlist${active ? '' : '--active'}`}
            onClick={onHandleWishlist}
            style={{ color: 'red' }}
          />
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
