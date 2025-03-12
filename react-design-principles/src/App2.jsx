import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Navbar from './Navbar';
import Product2 from './Product2';
import ProductDetails from './ProductDetails';
import Cart2 from './Cart2';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// import Button from './Button';

function App2() {
  const [products] = useState([
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect for those who can't remember things! 5/5 Highly recommend.",
        imageUrl: "https://img.freepik.com/free-photo/keyboard-with-note-pens_23-2147830012.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid", // Replace with a real URL
    },
    {
        id: "2",
        name: "Housing",
        price: 0,
        description: "Housing provided for out-of-state students or those who can't commute",
        imageUrl: "https://img.freepik.com/free-photo/close-up-house-figure-with-laptop_23-2148488252.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid", // Replace with a real URL
    },
    {
        id: "3",
        name: "Computer Rental",
        price: 300,
        description: "Don't have a computer? No problem!",
        imageUrl: "https://img.freepik.com/free-photo/laptop-nature-concept_23-2150246092.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid", // Replace with a real URL
    },
    {
        id: "4",
        name: "Coffee",
        price: 2,
        description: "Wake up!",
        imageUrl: "https://img.freepik.com/premium-photo/keyboard-cup-coffee-sit-table_1375-69764.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid", // Replace with a real URL
    },
    {
        id: "5",
        name: "Snacks",
        price: 0,
        description: "Free snacks!",
        imageUrl: "https://img.freepik.com/premium-photo/close-up-glasses-table-against-orange-background_1048944-23292324.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid", // Replace with a real URL
    },
    {
        id: "6",
        name: "Rubber Duckies",
        price: 3.50,
        description: "To help you solve your hardest coding problems.",
        imageUrl: "https://img.freepik.com/premium-photo/high-angle-view-yellow-toys-red-background_1048944-19457611.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid", // Replace with a real URL
    },
    {
        id: "7",
        name: "Fidget Spinner",
        price: 21.99,
        description: "Because we like to pretend we're in high school.",
        imageUrl: "https://img.freepik.com/premium-photo/close-up-objects-table_1048944-30002295.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid"
    },
    {
        id: "8",
        name: "Sticker Set",
        price: 14.99,
        description: "To prove to other devs you know a lot.",
        imageUrl: "https://img.freepik.com/free-vector/searching-stickers-collection-with-fred-fox_23-2151019487.jpg?uid=R30727684&ga=GA1.1.883849888.1736524172&semt=ais_hybrid"
        
    }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <>
    <CartProvider>
        <Navbar />
        <ToastContainer />
      <div className="product-list">
        <h1>Products</h1>

        {selectedProduct ? (
          <ProductDetails product={selectedProduct} onBack={handleBackToProducts} />
        ) : (
          <div className="products-container">
            {products.map(product => (
              <Product2
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
        <h2>Cart</h2>
        <Cart2 />
      </div>
      <Footer />
    </CartProvider>
    
   </> 

  );
}

export default App2;