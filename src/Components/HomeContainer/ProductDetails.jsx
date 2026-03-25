import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { myCart } from '../../context/CartContext.jsx'
import toast from 'react-hot-toast'

const ProductDetails = () => {

    let Dydata = useParams();
    let [spData, setSpData] = useState({});

    let navigate = useNavigate();
    const { cart, addCart } = useContext(myCart);
    const isInCart = cart.some(item => item.id === spData.id);

    async function fetchData() {
        let data = await fetch("https://fakestoreapi.com/products/" + Dydata.id);
        let finalData = await data.json();
        setSpData(finalData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    //&& ADD TO CART FUNCTIONALITY
    function addToCart() {
        addCart(spData);
        toast.success("Product added to cart successfully!");
        // navigate("/cart"); // Optional: navigate to cart immediately, un-comment if desired
    }



    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

            <div className="bg-white shadow-xl rounded-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

                {/* Product Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={spData.image}
                        alt={spData.title}
                        className="w-80 h-80 object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-4">

                    <h2 className="text-2xl font-bold text-gray-800">
                        {spData.title}
                    </h2>

                    <h3 className="text-3xl font-semibold text-black-600">
                        price:- <span className="text-red-600 font-thin">17% OFF</span>₹ {Math.round(spData.price * 90)}
                    </h3>

                    <div className="text-yellow-500 text-lg">
                        {"⭐".repeat(Math.round(spData.rating?.rate || 0))}
                        <span className="text-gray-600 ml-2">
                            ({spData.rating?.rate})
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {spData.description}
                    </p>

                    <div className="flex items-center gap-4 mt-8">

                        <Link to={'/'}>
                            <button className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 cursor-pointer">
                                Close
                            </button>
                        </Link>

                        {isInCart ? (
                            <button onClick={() => navigate("/cart")} className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                Go to cart
                            </button>
                        ) : (
                            <button onClick={addToCart} className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                Add to cart
                            </button>
                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails