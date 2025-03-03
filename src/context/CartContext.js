import React, { createContext, useState } from 'react';

// Create Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add product to cart
    const addToCart = (product) => {
        setCart([...cart, { ...product, cartId: Math.random().toString() }]);
    };

    // Function to remove product from cart
    const removeFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
