import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import './confirmation.scss';

// Image
import visa from '../../../assets/cards/visa.svg';
import visa1 from '../../../assets/cards/visa(1).svg';
import mastercard from '../../../assets/cards/mastercard.svg';
import mastercard2 from '../../../assets/cards/mastercard2.svg';
import maestro from '../../../assets/cards/maestro.svg';
import { useEffect } from 'react';

function Confirmation({ cart, profile, clearCartHander }) {
  const navigate = useNavigate();
  console.log(cart);
  const {
    name: { firstname, lastname },
    address: { city, street, number, zipcode },
    phone,
    email,
  } = profile;

  const streetName = street
    .split(' ')
    .map(str => uppercase(str))
    .join(' ');

  const cityName = city
    .split(' ')
    .map(str => uppercase(str))
    .join(' ');

  let totalQty;
  let totalPrice;
  let singleQty;
  let singlePrice;

  if (cart.length === 1) {
    cart.map(({ qty }) => (singleQty = qty));
    cart.map(({ subtotal }) => (singlePrice = subtotal));
  } else {
    cart.map(({ qty }) => qty).reduce((a, b) => (totalQty = a + b));
    cart.map(({ subtotal }) => subtotal).reduce((a, b) => (totalPrice = a + b));
  }

  function uppercase(str = '') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function currency(val) {
    return Math.round(val * 14000).toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
  }

  // GET SELECTOR INPUT ELEMENT
  let elCC;
  useEffect(() => {
    elCC = document.getElementById('cc__card');
  });

  // GET RANDOM NUMBER FOR CC
  let numberCC;
  const getRandomNum = () =>
    (numberCC = Number(Math.random().toFixed(16).split('.')[1]));

  function fillCCNumber() {
    getRandomNum();
    elCC.value = numberCC;
  }

  // ALERT FOR CONFIRM PAYMENT
  function confirmPayment() {
    Swal.fire({
      title: 'Proceed this order?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      buttonsStyling: true,
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(result => {
      if (result.isConfirmed) {
        setTimeout(() => {
          navigate('/');
          clearCartHander();
          Swal.fire({
            title: 'Your order has been placed',
            text: 'Thank You for Being Our Valued Customer',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Yes',
            buttonsStyling: true,
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
              denyButton: 'order-3',
            },
          });
        }, 3000);
      }
    });
  }

  //CTA BUTTON PAYMENT
  function confirmOrder(e) {
    e.preventDefault();
    if (Number(elCC.value) === numberCC) {
      confirmPayment();
    } else {
      Swal.fire(
        'Number is Invalid',
        'Try click one of credit card images to get the number',
        'error'
      );
    }
  }

  return (
    <div className='confirmation'>
      <div className='confirmation__container'>
        <div className='title'>
          <h2>Order Summary</h2>
        </div>
        <div className='items__list'>
          <table>
            <thead>
              <tr>
                <th>Num</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ title, qty, price, cartID }, i) => {
                return (
                  <tr key={cartID}>
                    <td className='table__num'>{i + 1}</td>
                    <td className='table__title' title={title}>
                      {title}
                    </td>
                    <td className='table__qty'>{qty}</td>
                    <td className='table__total'>{currency(price)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className='table__total--tfoot' colSpan={2}>
                  Total
                </td>
                <td className='table__totalQty'>
                  {cart.length === 1 ? singleQty : totalQty}
                </td>
                <td className='table__totalPrice'>
                  {cart.length === 1
                    ? currency(singlePrice)
                    : currency(totalPrice)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='container-confirmation'>
          <div className='shipping__information'>
            <div className='title'>
              <h2>Shipping Information</h2>
            </div>
            <div className='information'>
              <p className='fullname'>
                {uppercase(firstname)} {uppercase(lastname)},
              </p>
              <p>
                {number}, {streetName}
              </p>
              <p>
                {cityName}, {zipcode}
              </p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className='payment__method'>
            <div className='title'>
              <h2>Payment Method</h2>
            </div>
            <p className='title__credit'>
              We accept following cards for payment method.
            </p>
            <div className='credit__cards'>
              <div className='cc__container'>
                <img
                  src={visa}
                  alt='visa card'
                  className='card-cc'
                  onClick={fillCCNumber}
                />
              </div>
              <div className='cc__container'>
                <img
                  src={visa1}
                  alt='visa card'
                  className='card-cc'
                  onClick={fillCCNumber}
                />
              </div>
              <div className='cc__container'>
                <img
                  src={mastercard}
                  alt='mastercard'
                  className='card-cc'
                  onClick={fillCCNumber}
                />
              </div>
              <div className='cc__container'>
                <img
                  src={mastercard2}
                  alt='mastercard'
                  className='card-cc'
                  onClick={fillCCNumber}
                />
              </div>
              <div className='cc__container'>
                <img
                  src={maestro}
                  alt='maestro card'
                  className='card-cc'
                  onClick={fillCCNumber}
                />
              </div>
            </div>
            <div className='input__cc'>
              <form>
                <label htmlFor='cc-number'>Card Number</label>
                <input
                  type='number'
                  name='cc-number'
                  required
                  className='cc__card'
                  id='cc__card'
                />
                <button onClick={confirmOrder}>CONFIRM</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
