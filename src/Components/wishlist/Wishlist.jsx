import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { myWishlist } from '../../context/WishlistContext.jsx';
import { myCart } from '../../context/CartContext.jsx';
import toast from 'react-hot-toast';

const Wishlist = () => {
    const { wishlist, removeWishlist } = useContext(myWishlist);
    const { addCart } = useContext(myCart);
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        addCart(item);
        toast.success("Added to cart");
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800 font-sans">
            {/* Breadcrumb */}
            <NavLink to={'/'}>
                <div className="text-sm text-gray-500 mb-6 font-medium">
                    Home &gt; <span className="text-gray-900">Wishlist</span>
                </div>
            </NavLink>

            <h1 className="text-3xl font-bold mb-8 uppercase tracking-wider">Your Wishlist</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        
                        <div className="h-48 bg-gray-50 flex justify-center p-4 relative">
                            <img src={item.imageUrl || item.image} alt={item.title} className="max-h-full object-contain mix-blend-multiply" />
                            <button 
                                onClick={() => {
                                    removeWishlist(item.id);
                                    toast.success("Removed from wishlist");
                                }}
                                className="absolute top-3 right-3 p-2 bg-white rounded-full text-red-500 shadow-sm hover:bg-red-50 transition-colors"
                            >
                                <FiTrash2 size={18} />
                            </button>
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="font-bold text-lg mb-2 line-clamp-1">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                            
                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-bold text-xl">₹{Math.round(item.price * 90)}</span>
                                <button 
                                    onClick={() => handleAddToCart(item)}
                                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    <FiShoppingCart size={16} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    </div>
                ))}

                {wishlist.length === 0 && (
                    <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 max-w-sm mb-6">Explore more and shortlist some items.</p>
                        <button onClick={() => navigate('/')} className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
