import React from 'react'
import logo from '../images/logo.png'
import notification from '../images/notification.png'
import userProfile from '../images/userProfile.png'
import cart from '../images/cart.png'
import heart from '../images/heart.png'
import Search from './Search'
const Header = () => {
    
    
  return (
    <div className='bg-gradient-to-t from-black to-red-700 flex justify-around h-full  '>

      <div>
      <img className='w- h-full' src={logo} alt=""/>
      </div>
      
      <div className='w-1/2 flex items-center'>
      <Search/>
      </div>

      <div className='flex justify-between items-center'>
      <img className='w-10 h-8 ml-12' src={notification} alt=""/>
      <img className='w-10 h-8 ml-12' src={heart} alt=""/>
      <img className='w-10 h-8 ml-12' src={cart} alt=""/>
      <img className='w-10 h-10 ml-12' src={userProfile} alt=""/>
      </div>
      

    </div>
  )
}

export default Header