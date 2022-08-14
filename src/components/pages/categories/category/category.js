import { useParams } from 'react-router-dom';

import './category.scss';

// https://fakestoreapi.com/products/category/men's%20clothing

function Category({ products }) {
  const { category } = useParams();
  const items = products.filter(prod => prod.category === category);
  console.log(items);
  return (
    <div className='items'>
      <h2>{category}</h2>
    </div>
  );
}

export default Category;
