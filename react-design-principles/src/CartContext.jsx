import React, { createContext, useState } from 'react';

 const CartContext = createContext();
import { toast } from 'react-toastify';
 const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
      toast.success(`Added ${product.name} to cart!`, { autoClose: 100 });
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`Added ${product.name} to cart!`, { autoClose: 3000 });
    }
  };

  const increaseQuantity = (product) => {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
    toast.success(`Added ${product.name} to cart!`, { autoClose: 2000 });
  };

  const decreaseQuantity = (product) => {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
    toast.success(`Reduced total number of ${product.name} from cart by 1!`, { autoClose: 5000 });
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
    toast.error(`${product.name} removed from cart!`);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext};
export {CartProvider} ;