import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';

function Product2({ product, onViewDetails }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => onViewDetails(product)}>View Details</button>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

Product2.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default Product2;