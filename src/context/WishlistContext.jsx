import React, { createContext, useState, useEffect } from 'react';

export const myWishlist = createContext();

export const WishlistProvider = ({ children }) => {
    // Initialize wishlist from local storage or empty array
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Save wishlist to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addWishlist = (product) => {
        setWishlist((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                // Return same if already in wishlist
                return prev;
            }
            return [...prev, product];
        });
    };

    const removeWishlist = (id) => {
        setWishlist((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <myWishlist.Provider value={{ wishlist, addWishlist, removeWishlist, setWishlist }}>
            {children}
        </myWishlist.Provider>
    );
};

export default WishlistProvider;
