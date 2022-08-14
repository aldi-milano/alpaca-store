import { useParams } from 'react-router-dom';

import './category.scss';

// https://fakestoreapi.com/products/category/men's%20clothing

const params = {
  'man-clothes': "men's clothing",
  'woman-clothes': "women's clothing",
  jewelry: 'jewelry',
  electronics: 'electronics',
};

function Category() {
  const { param } = useParams();
  console.log(Object.keys(params));
  return (
    <div className='items'>
      <div className='container__a'>
        <h2>
          <a href='' className='anchor'>
            This is anchor
          </a>
        </h2>
        <h2>
          <a href=''>This is anchor</a>
        </h2>
      </div>
    </div>
  );
}

export default Category;
