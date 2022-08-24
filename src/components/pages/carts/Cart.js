import { useState } from 'react';
import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';

import './cart.scss';

const item = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
  wishlist: false,
};

function Cart() {
  const [qty, setQty] = useState(1);

  const increment = () => setQty(qty + 1);
  const decrement = () => {
    setQty(qty - 1);
    if (qty === 1) setQty(1);
  };

  return (
    <div className='cart'>
      <div className='cart__container'>
        <IoCloseOutline className='close' />
        <div className='container__img'>
          <img src={item.image} alt='' className='img' />
        </div>
        <div className='container__detail'>
          <div className='detail'>
            <p className='detail__title'>{item.title}</p>
          </div>
          <div className='container__order'>
            <div className='qty'>
              <IoRemoveOutline className='icon--dec' onClick={decrement} />
              <p>{qty}</p>
              <IoAddOutline className='icon--inc' onClick={increment} />
            </div>
            <div className='price'>
              <p className='detail__price'>
                {Math.round(item.price * 14000 * qty).toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
