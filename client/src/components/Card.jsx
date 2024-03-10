import React, { useState } from 'react'
import cart from '../images/cart.png'
import heart from '../images/heart.png'
import { addToCart, addToWishlist } from '../utility/store/cartSlice'
import { useDispatch } from 'react-redux'
import PopUpMessage from '../utility/PopUpMessage'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  const dispatch=useDispatch()
 const handleCart=()=>{dispatch(addToCart(data))
 setPopupMessage('Item added to cart');
    setShowPopup(true);
}

 const handleWishlist=()=>{dispatch(addToWishlist(data))
 setPopupMessage('Item added to wishlist');
 setShowPopup(true);
}
 
 const [showPopup, setShowPopup] = useState(false);
 const [popupMessage, setPopupMessage] = useState('');




  return (
    <Link to={"/product/"+data?._id}>
    <div className='relative w-72 h-96   bg-gradient-to-br from-customPurple to-black pt-1  rounded-3xl font-exo transition  duration-200 transform hover:scale-105'>
        
        <img className='h-[70%] w-[85%] mx-auto mt-3 block   rounded-3xl' src={data.image} alt="" />
        
  <div className='mt-2 flex mx-4 justify-between'>
  <p className='text-white     '>{data?.rating?.rate}⭐️</p>
  <p className='text-white  '>₹{data?.price}</p>
  
  </div>
  <p className='text-white text-lg truncate mt-1  mx-4'>{data?.title}</p>
  <div className='flex absolute justify-around w-full mt-2'>
    <p onClick={handleCart} className='bg-customPurple rounded-full cursor-pointer'><img className='w-6 m-2 ' src={cart} alt=''/></p>
    <p onClick={handleWishlist} className='bg-customPurple rounded-full cursor-pointer'><img className='w-6 m-2' src={heart} alt=''/></p>
  </div>
  {showPopup && <PopUpMessage message={popupMessage} setShowPopup={setShowPopup} />}
</div></Link>

  )
}

export default Card