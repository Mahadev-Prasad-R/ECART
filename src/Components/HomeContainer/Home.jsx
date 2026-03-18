import React, { useEffect, useState } from "react";
 import HomeContentCard from "./HomeContentCard";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Footer from "../Footer/Footer";
import Hero from "../HeroComponent/Hero";

const Home = () => {

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading]=useState(false)

  let { search } = useOutletContext();

  async function fetchingData() {
    let res = await axios.get("https://fakestoreapi.com/products");
     setTimeout(() => {
      setData(res.data);
      setProducts(res.data);
      setIsLoading(true); // or setIsLoaded(true) if you rename
    }, 2000);

     
  }

  // CATEGORY FILTER
  function categories(category) {

    if (category === "all") {
      setData(products);
      return;
    }

    let filteredata = products.filter((item) => item.category === category);

    console.log(filteredata);

    setData(filteredata);
  }

  useEffect(() => {
    fetchingData();
  }, []);

 // Filter products based on search
let filteredData = data.filter((item) =>
  item.title?.toLowerCase().includes(search?.toLowerCase() || "")
);
  console.log(filteredData)
  console.log(search);


  return (
    <>

      <Hero/>
      <div className="min-h-screen bg-black flex flex-col items-center">

        {/* CATEGORY BUTTONS */}
       <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 px-4">

          
          <button
            onClick={() => categories("all")}
            className="w-[80px] px-4 py-2 border-2 border-gray-500 text-white rounded-md hover:bg-gray-700"
          >
            All
          </button>

          <button
            onClick={() => categories("men's clothing")}
            className="w-[150px] px-4 py-2 border-2 border-gray-500 text-white rounded-md hover:bg-gray-700"
          >
            Mens
          </button>

          <button
            onClick={() => categories("women's clothing")}
            className="w-[150px] px-4 py-2 border-2 border-gray-500 text-white rounded-md hover:bg-gray-700"
          >
            Womens
          </button>

          <button
            onClick={() => categories("electronics")}
            className="w-[150px] px-4 py-2 border-2 border-gray-500 text-white rounded-md hover:bg-gray-700"
          >
            Electronics
          </button>

          <button
            onClick={() => categories("jewelery")}
            className="w-[150px] px-4 py-2 border-2 border-gray-500 text-white rounded-md hover:bg-gray-700"
          >
            Jewelery
          </button>


        </div>

        {/* PRODUCTS */}
        <div className="container flex flex-wrap gap-6 justify-center mt-10">

           {isLoading ? 
            filteredData.map((item) => (
            <HomeContentCard
              key={item.id}
              title={item.title}
              imageUrl={item.image}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))
           : (
    <div className="loader">
      <div className="box"></div>
    </div>
  )}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Home;