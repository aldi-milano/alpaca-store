import React from 'react';
import Card from '../../card/Card';

import notFound from '../../../assets/illustration/not-found.png';
import lookingUp from '../../../assets/illustration/pixeltrue-seo.png';

import './searchResult.scss';

function SearchResult({
  item,
  keyword,
  onHandleAddtoCart,
  onHandleAddToWishlist,
}) {
  if (!keyword.length) {
    return (
      <div className='announcement'>
        <div className='announcement__container'>
          <div className='img__container'>
            <img
              src={lookingUp}
              alt='illustration man sitting with cat'
              className='img'
            />
          </div>
          <p className='wishlist-title'>Looking for something?</p>
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

  if (keyword?.length > 1 && item.length === 0) {
    return (
      <div className='announcement'>
        <div className='announcement__container'>
          <div className='img__container'>
            <img
              src={notFound}
              alt='illustration man sitting with cat'
              className='img'
            />
          </div>
          <p className='wishlist-title'>
            Sorry, we couldn't find any matches for '<strong>{keyword}</strong>'
          </p>
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

  if (keyword?.length > 0) {
    return (
      <div className='result'>
        {item.map(({ title, image, price, id, wishlist }) => (
          <Card
            title={title}
            image={image}
            price={price}
            key={id}
            onHandleAddtoCart={onHandleAddtoCart}
            id={id}
            onHandleAddToWishlist={onHandleAddToWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
    );
  }
}

export default SearchResult;
