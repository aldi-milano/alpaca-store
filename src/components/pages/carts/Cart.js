// import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';
import { useRef } from 'react';

import CartCard from './CartCard';
import './cart.scss';

import illustration from '../../../assets/illustration/pixeltrue-study-from-books.png';

function Cart({ cart, removeFromCart, incrementHandler, decrementHandler }) {
  const total = cart.map(item => item.subtotal).reduce((a, b) => a + b);

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
      {cart.map(({ id, image, title, price, cartID, qty, subtotal }) => {
        return (
          <CartCard
            id={id}
            image={image}
            title={title}
            price={price}
            removeFromCart={removeFromCart}
            key={cartID}
            cartID={cartID}
            qty={qty}
            subtotal={subtotal}
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
          />
        );
      })}
      <div className='total__detail'>
        <div className='checkout'>
          <button>CHECKOUT</button>
        </div>
        <div className='total'>
          <p>
            Total :{' '}
            <span>
              {Math.round(total * 14000).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </span>
          </p>
          <p className='total__item'>Total Item: {cart.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
