import React, { useState } from 'react';
import { IoHeartOutline, IoHeart, IoStarOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

import './singleproduct.scss';

function SingleProduct({ products, onHandleAddToWishlist, onHandleAddtoCart }) {
  const [active, setActive] = useState(true);
  const { prodId } = useParams();
  function setState() {
    setActive(!active);
  }

  const [item] = products
    .filter(prod => prod.id === Number(prodId))
    .map(prod => prod);
  const {
    title,
    image,
    price,
    description,
    id,
    wishlist,
    rating: { rate, count },
  } = item;

  return (
    <div className='singleproduct' id={id}>
      <div className='singleproduct__container'>
        <div className='container__img'>
          <img src={image} alt={title} className='img' />
        </div>
        <div className='container__desc'>
          <div className='container'>
            <h2 className='desc__price'>
              {' '}
              {Math.round(price * 14000).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </h2>
            <IoHeartOutline
              className={`icon__wishlist${wishlist ? '--active' : ''}`}
              onClick={() => onHandleAddToWishlist(id)}
              id={id}
            />
            <IoHeart
              className={`icon__wishlist${!wishlist ? '--active' : ''}`}
              onClick={() => onHandleAddToWishlist(id)}
              style={{ color: 'red' }}
            />
          </div>
          <h3 className='desc__title'>{title}</h3>
          <div className='desc__rating'>
            <IoStarOutline />
            <p className='rating__detail'>
              {rate} | {count}
            </p>
          </div>
          <p className='desc__detail__title'>Description :</p>
          <p className={`desc__detail${active ? '--active' : ''}`}>
            {description}
          </p>
          <button onClick={setState}>
            {active ? 'See more...' : 'See less...'}
          </button>
        </div>
        <div className='container__act' onClick={() => onHandleAddtoCart(id)}>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
