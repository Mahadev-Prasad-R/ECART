import React, { useEffect, useState } from 'react'
import HomeContentCard from './HomeContentCard';

const Home = () => {
  let [data,setData]=useState([])

  async function fetchData(){
    let data=await fetch("https://fakestoreapi.com/products");
    let finalData= await data.json()
     
    setData(finalData)
  }

  useEffect(()=>{
fetchData();
  },[])
  
  return (
    <div className='w-full bg-black flex flex-wrap justify-center items-center gap-8 gapx-16 gap-y-20 pt-16 '>
         {
          data.map((items)=>{
            return(
              <HomeContentCard title={items.title} imageUrl={items.image} price={items.price} description={items.description} />
            )
          })
         }
    </div>
  )
}

export default Home