import { useState } from 'react';
// import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';

import CartCard from './CartCard';
import './cart.scss';

import illustration from '../../../assets/illustration/pixeltrue-study-from-books.png';

function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return (
      <div className='announcement'>
        <div className='announcement__container'>
          <div className='img__container'>
            <img
              src={illustration}
              alt='illustration man sitting with cat'
              className='img'
            />
          </div>
          <p>Cart Is Empty.</p>
          <p className='title__src'>
            Illustration by{' '}
            <a href='https://icons8.com/illustrations/author/ARh4OKrFtdfC'>
              Pixeltrue
            </a>{' '}
            from <a href='https://icons8.com/illustrations'>Ouch!</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='cart'>
      {cart.map(({ id, image, title, price }) => {
        return (
          <CartCard
            id={id}
            image={image}
            title={title}
            price={price}
            removeFromCart={removeFromCart}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default Cart;
