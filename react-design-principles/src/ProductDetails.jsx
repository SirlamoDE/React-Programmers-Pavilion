import React from 'react'

const ProductDetails = ({product, onBack}) => {
    
  return (
    
    <div className="product-details">
      <h2>Product Details</h2>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}.</p>
      <button onClick={onBack}>Back to Products</button>
    </div>
  );
      
   
}

export default ProductDetails
