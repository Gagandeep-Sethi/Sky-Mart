import React, { useEffect } from 'react'
import logo from '../images/logo.png'
import notification from '../images/notification.png'
import userProfile from '../images/userProfile.png'
import cart from '../images/cart.png'
import heart from '../images/heart.png'
import Search from './Search'
const Header = () => {
  
  const getData=async()=>{
  const data =await fetch('/api/product')
  const json= await data.json()
  console.log(json)
  }

  useEffect(()=>{
   getData()
  },[])
    
    
  return (
    <div className='bg-gradient-to-t from-black to-red-700 flex justify-around h-full  '>

      <div>
      <img className='w- h-full' src={logo} alt=""/>
      </div>
      
      <div className='w-1/2 flex items-center'>
      <Search/>
      </div>

      <div className='flex justify-between items-center'>

        <div className='relative'>
      <img className='w-10 h-8 ml-12' src={notification} alt=""/>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>1</p>
      </div>

      <div className='relative'>
      <img className='w-10 h-8 ml-12' src={heart} alt=""/>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>1</p>
      </div>

      <div className='relative'>
      <img className='w-10 h-8 ml-12' src={cart} alt=""/>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>1</p>
      </div>

      <div className='relative'>
      <img className='w-10 h-10 ml-12' src={userProfile} alt=""/>
      <p className='text-white absolute left-[50%]  text-sm  bg-black px-2  rounded-full'>Login</p>
      </div>

      </div>
      

    </div>
  )
}

export default Header



