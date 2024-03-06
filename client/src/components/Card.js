import React from 'react'
import cart from '../images/cart.png'
import heart from '../images/heart.png'
const Card = ({data}) => {
  return (
    <div className='relative w-80 h-96   bg-gradient-to-br from-customPurple to-black pt-1  rounded-3xl font-exo transition  duration-200 transform hover:scale-105'>
        
        <img className='h-[70%] w-[85%] mx-auto mt-3 block   rounded-3xl' src={data.image} alt="" />
        
  <div className='mt-2 flex mx-4 justify-between'>
  <p className='text-white     '>{data?.rating?.rate}⭐️</p>
  <p className='text-white  '>₹{data?.price}</p>
  
  </div>
  <p className='text-white text-lg truncate mt-1  mx-4'>{data?.title}</p>
  <div className='flex absolute justify-around w-full mt-2'>
    <p className='bg-customPurple rounded-full'><img className='w-6 m-2 ' src={cart} alt=''/></p>
    <p className='bg-customPurple rounded-full'><img className='w-6 m-2' src={heart} alt=''/></p>
  </div>
</div>

  )
}

export default Card