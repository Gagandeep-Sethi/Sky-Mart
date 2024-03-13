import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart} from '../../utility/store/cartSlice'
import PopUpMessage from '../../utility/PopUpMessage'
import cart from '../../images/cart.png'
import { Link } from 'react-router-dom'

const WishlistItem = ({data}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(''); 

const dispatch=useDispatch()


const handleCart=()=>{dispatch(addToCart(data))
  setPopupMessage('Item added to cart');
     setShowPopup(true);
 }

  return (
    <div className='w-10/12 xl:w-8/12 mt-8 bg-customPurple rounded-2xl text-white ml-4'>
    <div className='grid  grid-cols-12 w-full h-[300px] py-4'>
        <div className='col-span-3  h-[270px] mx-5  '>
        <Link to={"/product/"+data?._id}><img className=' h-full w-full block rounded-2xl' src={data.image} alt="" /></Link>
        </div>
        <div className='col-span-9'>
          <p className='text-2xl font-exo border-b-2 border-white w-fit'>{data?.title}</p>
        <p className='text-sm text-yellow-200 font-extralight mt-4'>{data?.description}</p>
        <p className='mt-4'>₹{data?.price}</p>
        <div className=' mt-4'>
          
          <p onClick={handleCart} className='bg-customBlack p-1 w-fit rounded-full cursor-pointer'><img className='w-6 m-2 ' src={cart} alt=''/></p>
          {showPopup && <PopUpMessage message={popupMessage} setShowPopup={setShowPopup} />}
        </div>
        
        </div>
    </div>
    </div>
    
  )
}

export default WishlistItem