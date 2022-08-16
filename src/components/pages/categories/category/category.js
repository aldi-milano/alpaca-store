import { useParams } from 'react-router-dom';
import Card from '../../../card/Card';

function Category({ products, onHandleAddtoCart, onHandleAddToWishlist }) {
  const { category } = useParams();
  const items = products.filter(prod => prod.category === category);
  return (
    <div className='result'>
      {items.map(({ image, title, price, id, wishlist }) => {
        return (
          <Card
            image={image}
            title={title}
            price={price}
            key={id}
            wishlist={wishlist}
            onHandleAddToWishlist={onHandleAddToWishlist}
            onHandleAddtoCart={onHandleAddtoCart}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default Category;
