import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-full w-72 bg-gradient-to-b from-black to-red-700 pt-4'>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>Track Order</p>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>Account</p>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>Category</p>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>Offers</p>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>New Arrivals</p>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>Best Selling</p>
     <p className='text-white text-center w-full py-4 rounded-xl cursor-pointer hover:bg-white hover:text-red-900 font-semibold transition ease-out duration-400'>Contact Us</p>
    </div>
  )
}

export default Sidebar