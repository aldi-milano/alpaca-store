import man from '../../../assets/categories/man.jpg';
import woman from '../../../assets/categories/woman.jpg';
import jewelry from '../../../assets/categories/jewelry.jpg';
import electronics from '../../../assets/categories/electronics.jpg';

import './categories.scss';

function Categories() {
  return (
    <div className='category'>
      <div className='category__container'>
        <div className='container__img'>
          <img src={man} alt='' className='img' />
        </div>
        <div className='container__title'>
          <p>Man Clothes</p>
        </div>
      </div>
      <div className='category__container'>
        <div className='container__img'>
          <img src={woman} alt='' className='img' />
        </div>
        <div className='container__title'>
          <p>Woman Clothes</p>
        </div>
      </div>
      <div className='category__container'>
        <div className='container__img'>
          <img src={jewelry} alt='' className='img' />
        </div>
        <div className='container__title'>
          <p>Jewelry</p>
        </div>
      </div>
      <div className='category__container'>
        <div className='container__img'>
          <img src={electronics} alt='' className='img' />
        </div>
        <div className='container__title'>
          <p>Electronics</p>
        </div>
      </div>
      {/* <div className='category__container'>
        <div className='container__img'>
          <img src={woman} alt='' className='img' />
        </div>
        <div className='container__title'>
          <p>Woman Clothes</p>
        </div>
      </div>
      <div className='category__container'>
        <div className='container__img'>
          <img src={jewelry} alt='' className='img' />
        </div>
        <div className='container__title'>
          <p>Jewelry</p>
        </div>
      </div> */}
    </div>
  );
}

export default Categories;
