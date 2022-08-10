import React, { useEffect, useRef, useState } from 'react';

import './wishlist.scss';

// function Wishlist({ products }) {
//   products.filter(prod => prod.wishlist).forEach(prod => <p>{prod.title}</p>);
// }

function Wishlist({ products }) {
  const [spans, setSpans] = useState(0);

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

  return (
    <div className='wishlist'>
      {products
        .filter(prod => prod.wishlist === true)
        .map(({ title, image, id, price }) => (
          <div
            ref={heightRef}
            className='card'
            style={{ gridRowEnd: `span ${spans}` }}
            id={id}
          >
            <div className='card__container-img'>
              <img src={image} alt='' className='img' />
            </div>
            <p className='card__desc-price'>
              {Math.round(price * 14000).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </p>
            <p className='card__desc-title' title={title}>
              {title}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Wishlist;
