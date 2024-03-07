import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../utility/store/cartSlice'

const CartItem = ({data}) => {
    
const dispatch=useDispatch()

const handleAdd=()=>{
  dispatch(addToCart(data))
}
const handleSub=()=>{
  dispatch(removeFromCart(data?._id))
}


  return (
    <div className='w-8/12 mt-8 bg-customPurple rounded-2xl text-white ml-4'>
    <div className='grid  grid-cols-12 w-full h-[300px] py-4'>
        <div className='col-span-3  h-[270px] mx-5  '>
        <img className=' h-full w-full block rounded-2xl' src={data.image} alt="" />
        </div>
        <div className='col-span-9'>
          <p className='text-2xl font-exo border-b-2 border-white w-fit'>{data?.title}</p>
        <p className='text-sm text-yellow-200 font-extralight mt-4'>{data?.description}</p>
        <p className='mt-4'>₹{data?.price}</p>
        <div className='flex mt-4'>
          <button onClick={handleAdd} className='bg-black px-3 py-1 rounded-full'>+</button>
          <p className='mx-2 text-lg font-bold'>{data?.quantity}</p>
          <button onClick={handleSub} className='bg-black px-3 py-1 rounded-full'>-</button>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default CartItem