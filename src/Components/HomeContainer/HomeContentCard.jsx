import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { myWishlist } from '../../context/WishlistContext'
import { FiHeart } from 'react-icons/fi'

const HomeContentCard = ({ title, imageUrl, price, description, id, category, rating }) => {
  const { wishlist, addWishlist, removeWishlist } = useContext(myWishlist);
  const isWishlisted = wishlist.some(item => item.id === id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeWishlist(id);
      toast.success("Removed from wishlist");
    } else {
      addWishlist({ id, title, image: imageUrl, imageUrl, price, description, category, rating });
      toast.success("Added to wishlist");
    }
  };

  return (
    <div className='w-[280px] h-[350px] flex flex-col relative justify-center bg-gray-800 text-white rounded-md p-4 group'>
      
      {/* Wishlist Button */}
      <button 
        onClick={toggleWishlist}
        className='absolute top-3 right-3 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors z-10'
      >
        <FiHeart 
          size={20} 
          className={`transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-300 group-hover:text-white'}`} 
        />
      </button>

      {/* Image Center */}
      <div className="flex justify-center mt-2">
        <img
          className='w-[150px] h-[150px] object-contain'
          src={imageUrl}
          alt={title}
        />
      </div>

      <h3 className='text-lg font-bold mt-2 text-center'>
        {title.slice(0, 20)}
      </h3>

      <p className="text-lg font-bold text-white-400 mt-1 text-center text-amber-300">
        ₹{price * 90}
      </p>
      <p>{description.slice(0, 80)}</p>

      <Link to={`/productDetails/${id}`}>
        <div className='flex justify-center'>
          <button className="px-4 py-1 border border-blue-600 text-blue-600 mt-4
cursor-pointer rounded-md text-sm hover:bg-blue-600 hover:text-white
hover:scale-110 duration-100 ease-in">
            View Info
          </button>
        </div>
      </Link>

      <div className="flex justify-center">

      </div>

    </div>
  )
}

export default HomeContentCard