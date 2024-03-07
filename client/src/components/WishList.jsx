import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import WishlistItem from './WishlistItem'

const WishList = () => {
    const wishlist=useSelector(appStore=>appStore?.cart?.wishlist)
    
  return (
    <div className='bg-gray-100 h-full'>
      
      <p className='text-center pt-14 text-4xl font-shadows-into-light font-bold pb-4 '>Wishlist</p>
      
      {wishlist.length===0?
      <div className='flex flex-col justify-center items-center mt-24'><p className='text-yellow-700 text-center  font-exo text-3xl'>No item added to wishlist yet !!! </p>
      <Link to="/"><button className="bg-customPurple  text-white font-bold py-2 px-4 rounded-lg hover:shadow-2xl  mt-20">
        Add Items
      </button></Link></div>:
      <div className='w-screen flex '>{wishlist.map((res)=><div><WishlistItem key={res?._id}data={res} /></div>)}
      
      </div>

      }
      
      
      </div>

  )
}

export default WishList