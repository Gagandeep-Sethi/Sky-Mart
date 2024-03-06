import React from 'react'

const Card = ({data}) => {
  return (
    <div className=' w-80 h-96   bg-gradient-to-br from-customPurple to-black pt-1  rounded-3xl font-exo'>
        
        <img className='h-[70%] w-[85%] mx-auto mt-3 block   rounded-3xl' src={data.image} alt="" />
        
  <div className='mt-2 flex mx-4 justify-between'>
  <p className='text-white     '>{data?.rating?.rate}⭐️</p>
  <p className='text-white  '>₹{data?.price}</p>

  
  </div>
  <p className='text-white text-lg truncate mt-1  mx-4'>{data?.title}</p>
</div>

  )
}

export default Card