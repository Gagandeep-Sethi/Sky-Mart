import React from 'react'
import logo from '../images/logo.png'
import notification from '../images/notification.png'
import userProfile from '../images/userProfile.png'
import cart from '../images/cart.png'
import heart from '../images/heart.png'
import Search from './Search'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Header = () => {
  
  
  const carts=useSelector(appStore=>appStore.cart.cart)
  const wishlist=useSelector(appStore=>appStore.cart.wishlist)
    
  return (
    <div className='bg-gradient-to-b from-customPurple to-black  flex justify-around h-full  '>

      <div>
      <Link to="/"><img className='w- h-full' src={logo} alt=""/></Link>
      </div>
      
      <div className='w-1/2 flex items-center'>
      <Search/>
      </div>

      <div className='flex justify-between items-center'>

        <div className='relative'>
      <Link to="/notification"><img className='w-10 h-8 ml-12' src={notification} alt=""/></Link>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>0</p>
      </div>

      <div className='relative'>
      <Link to="/wishlist"><img className='w-10 h-8 ml-12' src={heart} alt=""/></Link>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>{wishlist.length}</p>
      </div>

      <div className='relative'>
      <Link to="/cart"><img className='w-10 h-8 ml-12' src={cart} alt=""/></Link>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>{carts.reduce((acc,res)=>{return acc+res.quantity},0)}</p>
      </div>

      <div className='relative'>
      <Link to="/account"><img className='w-10 h-10 ml-12' src={userProfile} alt=""/></Link>
      <p className='text-white absolute left-[50%]  text-sm  bg-black  px-2 py-1  rounded-full'>Login</p>
      </div>

      </div>
      

    </div>
  )
}

export default Header



