import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 
const ProductDetails = () => {

    let Dydata = useParams();
    let [spData, setSpData] = useState({});

    async function fetchData() {
        let data = await fetch("https://fakestoreapi.com/products/" + Dydata.id);
        let finalData = await data.json();
        setSpData(finalData);
    }

    useEffect(() => {
        fetchData();
    }, [])

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

                    <div className="flex gap-4 mt-4">

                       <Link to={'/'}>
        <div  className='flex justify-center'>
         <button className="px-4 py-1 border border-blue-600 text-blue-600 mt-4
cursor-pointer rounded-md text-sm hover:bg-blue-600 hover:text-white
hover:scale-110 duration-100 ease-in">
close
</button>
       </div>
        </Link>

                        {/* <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                            Buy Now
                        </button> */}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails