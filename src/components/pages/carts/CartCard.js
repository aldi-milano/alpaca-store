import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import './cart.scss';

function CartCard({
  id,
  image,
  title,
  cartID,
  qty,
  subtotal,
  removeFromCart,
  incrementHandler,
  decrementHandler,
  idx,
}) {
  return (
    <div className='cart__container' id={id}>
      <p className='number'>{idx + 1}</p>
      <IoCloseOutline
        className='close'
        onClick={() => removeFromCart(cartID)}
      />
      <Link to={`/${id}`}>
        <div className='container__img'>
          <img src={image} alt='' className='img' />
        </div>
      </Link>
      <div className='container__detail'>
        <div className='detail'>
          <p className='detail__title'>{title}</p>
        </div>
        <div className='container__order'>
          <div className='qty'>
            <IoRemoveOutline
              className='icon--dec'
              onClick={() => decrementHandler(cartID)}
            />
            <p>{qty}</p>
            <IoAddOutline
              className='icon--inc'
              onClick={() => incrementHandler(cartID)}
            />
          </div>
          <div className='price'>
            <p className='detail__price'>
              {Math.round(subtotal * 14000).toLocaleString('id-ID', {
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
