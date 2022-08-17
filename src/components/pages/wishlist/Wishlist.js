import './wishlist.scss';
import WishlistCard from './WishlistCard';

import illustration from '../../../assets/illustration/pixeltrue-sleeping.png';

function Wishlist({ products, onHandleAddtoCart, onHandleRemoveFromWishlist }) {
  if (products.every(prod => prod.wishlist === false)) {
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
          <p>Wishlist Is Empty</p>
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
    <div className='result'>
      {products
        .filter(prod => prod.wishlist)
        .map(({ image, title, price, id }) => {
          return (
            <WishlistCard
              image={image}
              title={title}
              price={price}
              id={id}
              onHandleAddtoCart={onHandleAddtoCart}
              onHandleRemoveFromWishlist={onHandleRemoveFromWishlist}
              key={id}
            />
          );
        })}
    </div>
  );
}

export default Wishlist;
