import { useState } from 'react';
import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';

import './cart.scss';

function CartCard({ id, image, title, price, removeFromCart }) {
  const [qty, setQty] = useState(1);

  const increment = () => setQty(qty + 1);
  const decrement = () => {
    setQty(qty - 1);
    if (qty === 1) setQty(1);
  };

  return (
    <div className='cart__container' id={id}>
      <IoCloseOutline className='close' onClick={() => removeFromCart(id)} />
      <div className='container__img'>
        <img src={image} alt='' className='img' />
      </div>
      <div className='container__detail'>
        <div className='detail'>
          <p className='detail__title'>{title}</p>
        </div>
        <div className='container__order'>
          <div className='qty'>
            <IoRemoveOutline className='icon--dec' onClick={decrement} />
            <p>{qty}</p>
            <IoAddOutline className='icon--inc' onClick={increment} />
          </div>
          <div className='price'>
            <p className='detail__price'>
              {Math.round(price * 14000 * qty).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
