import React, { useEffect } from 'react'
import logo from '../../images/logo.png'
import notification from '../../images/notification.png'
import userProfile from '../../images/userProfile.png'
import cart from '../../images/cart.png'
import heart from '../../images/heart.png'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser } from '../../utility/store/userSlice'
const Header = () => {
  
  const dispatch=useDispatch()
  const carts=useSelector(appStore=>appStore.cart.cart)
  const user=useSelector(appStore=>appStore.user.user)
  const wishlist=useSelector(appStore=>appStore.cart.wishlist)
    useEffect(()=>{
      const present=JSON.parse(localStorage.getItem('user'))//it analyse localstorage if it contain user item and convert JSON in js obj
      if(present){
        dispatch(addUser(present))
      }
    },[dispatch])
  return (
    <div className='bg-gradient-to-b from-customPurple to-black  flex justify-between h-full  '>

      <div>
      <Link to="/"><img className=' h-2/3 xl:h-full mt-6 xl:mt-1 w-28 xl:w-24 mb-2 ' src={logo} alt=""/></Link>
      </div>
      
      <div className='w-1/2 flex items-center'>
      <Search/>
      </div>

      <div className='flex justify-between items-center'>

        <div className='relative ml-4'>
      <Link to="/notification"><img className='w-10 h-8 ' src={notification} alt=""/></Link>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>0</p>
      </div>

      <div className='relative ml-10'>
      <Link to="/wishlist"><img className='w-10 h-8 ' src={heart} alt=""/></Link>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>{wishlist.reduce((acc,res)=>{return acc+res?.quantity},0)}</p>
      </div>

      <div className='relative ml-12'>
      <Link to="/cart"><img className='w-10 h-8 ' src={cart} alt=""/></Link>
      <p className='text-white absolute left-[90%] bottom-[50%] text-sm  bg-black px-2  rounded-full'>{carts.reduce((acc,res)=>{return acc+res.quantity},0)}</p>
      </div>

      <div className='relative ml-10'>
      <Link to="/account"><img className='w-10 h-10 ' src={userProfile} alt=""/></Link>
      <p className='text-white absolute -left-2  text-sm  bg-black  px-2 py-1  rounded-full'>{user? user?.username:"Login"}</p>
      </div>

      </div>
      

    </div>
  )
}

export default Header



