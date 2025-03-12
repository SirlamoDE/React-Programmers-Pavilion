import React, { useContext } from 'react';

import { CartContext } from './CartContext';

const Cart2 = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${calculateTotal().toFixed(2)}</h4>
    </div>
  );
}

export default Cart2;