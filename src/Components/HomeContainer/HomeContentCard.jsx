import React from 'react'

const HomeContentCard = ({title, imageUrl,price,description}) => {
  return (
    <div className='w-[280px] h-[380px] flex flex-col  justify-center bg-gray-800 text-white rounded-md p-4'>

      {/* Image Center */}
      <div className="flex justify-center">
        <img
          className='w-[150px] h-[150px] object-contain'
          src={imageUrl}
          alt={title}
        />
      </div>

      <h3 className='text-lg font-bold mt-2 text-left'>
        {title.slice(0,20)}
      </h3>

      <p className="text-lg font-bold text-white-400 mt-1 mr-50">
  ₹{price}
</p>
<p>{description.slice(0,50)}</p>

       <div  className='flex justify-center'>
         <button className="px-4 py-1 border border-blue-600 text-blue-600 mt-4
cursor-pointer rounded-md text-sm hover:bg-blue-600 hover:text-white
hover:scale-110 duration-100 ease-in">
View Info
</button>
       </div>
    </div>
  )
}

export default HomeContentCard