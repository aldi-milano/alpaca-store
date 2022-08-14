import { Link } from 'react-router-dom';

import men from '../../../assets/categories/men.jpg';
import women from '../../../assets/categories/women.jpg';
import jewelry from '../../../assets/categories/jewelry.jpg';
import electronics from '../../../assets/categories/electronics.jpg';

import './categories.scss';

function Categories() {
  return (
    <div className='category__flex'>
      <div className='category'>
        <Link to={`men's%20clothing`} className='block'>
          <div className='div--1'>
            <div className='container__img'>
              <img src={men} alt='' className='category__img' />
            </div>
            <div className='container__desc'>
              <p>Men's</p>
            </div>
          </div>
        </Link>
        <Link to={`women's%20clothing`} className='block'>
          <div className='div--1'>
            <div className='container__img'>
              <img src={women} alt='' className='category__img' />
            </div>
            <div className='container__desc'>
              <p>Women's</p>
            </div>
          </div>
        </Link>
        <Link to={`electronics`} className='block'>
          <div className='div--1'>
            <div className='container__img'>
              <img src={electronics} alt='' className='category__img' />
            </div>
            <div className='container__desc'>
              <p>Electronics</p>
            </div>
          </div>
        </Link>
        <Link to={`jewelery`} className='block'>
          <div className='div--1'>
            <div className='container__img'>
              <img src={jewelry} alt='' className='category__img' />
            </div>
            <div className='container__desc'>
              <p>Jewellery</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
