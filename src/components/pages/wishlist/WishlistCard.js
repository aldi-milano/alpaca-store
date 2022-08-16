import { useState, useRef, useEffect } from 'react';

function WishlistCard({ image, title, price, id }) {
  const [spans, setSpans] = useState(0);

  const heightRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      heightRef.current.addEventListener('load', getSpans());
    }, 700);
  }, []);

  function getSpans() {
    const height = heightRef.current.clientHeight;
    console.log(height);
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  }
  return (
    <div
      ref={heightRef}
      className='card'
      style={{ gridRowEnd: `span ${spans}` }}
      id={id}
    >
      <div className='card__container-img'>
        <img src={image} alt='' className='img' />
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
          {/* <IoHeartOutline
            className={`icon__wishlist${wishlist ? '--active' : ''}`}
            onClick={() => onHandleAddToWishlist(id)}
            id={id}
          />
          <IoHeart
            className={`icon__wishlist${!wishlist ? '--active' : ''}`}
            onClick={() => onHandleAddToWishlist(id)}
            style={{ color: 'red' }}
          /> */}
        </div>
        <p className='card__desc-title' title={title}>
          {title}
        </p>
        {/* <div
          className='card__desc-button'
          id={id}
          onClick={() => onHandleAddtoCart(id)}
        >
          <IoCartOutline className='icon--cart' />
          <button className='button--cart'>Add to cart</button>
        </div> */}
      </div>
    </div>
  );
}

export default WishlistCard;
