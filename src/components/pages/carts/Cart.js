import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CartCard from './CartCard';
import './cart.scss';

import illustration from '../../../assets/illustration/pixeltrue-study-from-books.png';

function Cart({
  cart,
  removeFromCart,
  incrementHandler,
  decrementHandler,
  isLogin,
}) {
  const navigate = useNavigate();

  function summary() {
    if (cart.length >= 1) {
      return cart.map(item => item.subtotal).reduce((a, b) => a + b);
    }
  }

  function totalQty() {
    if (cart.length >= 1) {
      return cart.map(item => item.qty).reduce((a, b) => a + b);
    }
  }

  const total = Number(summary());
  const qty = Number(totalQty());

  const toast = str => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 2000,
      // timerProgressBar: true,
    });
    Toast.fire({
      icon: 'info',
      title: str,
    });
  };

  let isLoginTrue;
  let isLoginfalse;

  function validationHandler() {
    if (!isLogin) {
      navigate('/profile');
      toast('You need to login first');
    } else {
      navigate('/confirmation');
    }
  }

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
          <p className='wishlist-title'>Cart Is Empty.</p>
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
        <div className='total'>
          <p className='total__item'>
            Total Item: <span className='qty'>{qty}</span>
          </p>
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
        </div>
        <div className='checkout'>
          <button onClick={validationHandler}>CHECKOUT</button>
          {/* {!isLogin
            ? [
                <Link to={'/profile'}>
                  <button>CHECKOUT</button>
                </Link>,
                toast('You need to login first.'),
              ]
            : console.log('it works')} */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
