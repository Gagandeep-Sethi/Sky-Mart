import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cart=useSelector(appStore=>appStore?.cart?.cart)
    const user=useSelector(appStore=>appStore?.user?.user)
    

  return (
    <div className='bg-gray-100 min-h-screen pb-8'>
      <div>
      <p className='text-center pt-14 text-4xl font-shadows-into-light font-bold pb-4 '>Shopping Cart</p>
      {cart.length===0?
      <div className='flex flex-col justify-center items-center mt-24'><p className='text-yellow-700 text-center  font-exo text-3xl'>No item added to cart yet !!! </p>
      <Link to="/"><button className="bg-customPurple  text-white font-bold py-2 px-4 rounded-lg hover:shadow-2xl  mt-20">
        Add Items
      </button></Link></div>:
      <div className='w-screen flex '><div className='w-8/12'>{cart.map((res)=><CartItem key={res?._id}data={res} />)}</div>
      <div className='w-3/12 h-96 mt-8 rounded-2xl bg-customPurple ml-10'>
         <p className='text-3xl mt-4 ml-4 font-exo text-white border-b-2 border-white text-center mr-4 '>Total Amount to Pay</p>
         <p className='text-white text-2xl font-mono text-center mt-8'>₹{cart.reduce((acc,res)=>{return acc+(res.price*res.quantity)},0)}</p>
         <Link to={!user?"/login":"/payment"}><p className='text-white px-4 py-2 rounded-2xl bg-black text-center w-[80%] mt-10 ml-[10%] cursor-pointer '>Proceed to Pay</p></Link>
         </div>
      
      </div>
      

      }
      </div>
      <div>

      </div>
    </div>
  )
}

export default Cart