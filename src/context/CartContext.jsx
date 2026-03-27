import React, { createContext, useState } from 'react'

export const myCart = createContext();

const CartProvider = ({children}) => {
    // Initialize cart from local storage or empty array
    let [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to local storage whenever it changes
    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    function addCart(product) {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

  return (
     <myCart.Provider value={{cart, addCart, setCart}}>
          {children}
     </myCart.Provider>
  )
}

export default CartProvider;