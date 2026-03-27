import React, { useState, useContext } from 'react';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import { myCart } from '../../context/CartContext.jsx';
import { myWishlist } from '../../context/WishlistContext.jsx';
import { NavLink, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart, addCart } = useContext(myCart);
  const { wishlist, removeWishlist } = useContext(myWishlist);
  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = Math.round(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 90);
  const discount = Math.round(subtotal * 0.20); // 20% discount as shown in design
  const deliveryFee = 50;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800 font-sans">
      {/* Breadcrumb */}
      <NavLink to={'/'}>
        <div className="text-sm text-gray-500 mb-6 font-medium">
          Home &gt; <span className="text-gray-900">Cart</span>
        </div>
      </NavLink>

      <h1 className="text-3xl font-bold mb-8 uppercase tracking-wider">Your Cart</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* Left Side: Cart Items */}
        <div className="xl:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-6 gap-4 sm:gap-6">

              <div className="flex gap-4 items-center flex-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                  <img src={item.image || item.imageUrl} alt={item.title || item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex flex-col gap-1 pr-2">
                  <h3 className="font-bold text-base sm:text-lg line-clamp-2">{item.title || item.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
                    {item.category && <p className="text-xs sm:text-sm text-gray-500 capitalize">{item.category}</p>}
                    {item.rating && (
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                        <span className="text-yellow-500">{"⭐".repeat(Math.round(item.rating.rate || 0))}</span>
                        <span>({item.rating.count})</span>
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-lg sm:text-xl mt-1">₹{Math.round(item.price * 90)}</p>
                </div>
              </div>

              {/* Right actions */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto sm:h-24 sm:py-1">
                <div className="hidden sm:block">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-4 bg-gray-100/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="font-semibold text-sm w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>

                <div className="sm:hidden">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1 text-red-500 text-sm font-medium hover:text-red-600 transition-colors p-2 bg-red-50 rounded-lg"
                  >
                    <FiTrash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              Your cart is empty.
            </div>
          )}
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full">
          <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>Subtotal</span>
                <span className="text-gray-900 font-bold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>Discount (-20%)</span>
                <span className="text-red-500 font-bold">-₹{discount}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>Delivery Fee</span>
                <span className="text-gray-900 font-bold">₹{deliveryFee}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-5 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">₹{total}</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a2 2 0 0 1-2.83 0l-8.97-8.97a2 2 0 0 1 0-2.83l9.19-9.19a2 2 0 0 1 2.83 0l8.97 8.97a2 2 0 0 1 0 2.83z"></path><line x1="14" y1="10" x2="14" y2="10"></line></svg>
                </span>
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-full py-3 pl-11 pr-4 focus:outline-none focus:ring-1 focus:ring-black text-sm"
                />
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full flex justify-center items-center gap-2 font-semibold hover:bg-gray-800 transition-colors text-sm hover:gap-3 group">
              Go to Checkout
              <FiArrowRight className="transition-all" />
            </button>

          </div>
        </div>
      </div>

      {/* Wishlist / Saved for Later Section */}
      {wishlist && wishlist.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Saved for Later</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-40 bg-gray-50 flex justify-center p-4 relative cursor-pointer" onClick={() => navigate(`/productDetails/${item.id}`)}>
                  <img src={item.imageUrl || item.image} alt={item.title} className="max-h-full object-contain mix-blend-multiply" />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeWishlist(item.id);
                    }}
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-red-500 shadow-sm hover:bg-red-50 transition-colors"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-sm mb-1 line-clamp-1">{item.title}</h3>
                  <p className="font-bold text-lg mb-3">₹{Math.round(item.price * 90)}</p>
                  <button 
                    onClick={() => addCart(item)}
                    className="mt-auto flex justify-center items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors w-full"
                  >
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;