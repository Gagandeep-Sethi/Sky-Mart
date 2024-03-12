import React, { useState } from 'react'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../utility/store/userSlice'

const Account = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const user=useSelector(appStore=>appStore.user.user)
  const dispatch=useDispatch()
  const handleLogout=()=>{
    localStorage.removeItem('user')
  dispatch(deleteUser())
  setShowConfirmation(false)

  }
  return (
    <div>{!user?<Login/>:
      <div className='bg-gray-100 min-h-screen'>
        <p className='text-6xl text-center pt-10 font-shadows-into-light'>Hi , {user?.username}</p>
        <div className='bg-customPurple mx-72 rounded-3xl mt-14' >
          <p className='text-center text-3xl text-white text-exo pt-4  '>Track Orders</p>
          <p className='text-center py-10 text-xl '>OOPs !!! no orders to track right now</p>
        </div>
        <div className='bg-customPurple mx-72 rounded-3xl mt-14' >
          <p className='text-center text-3xl text-white text-exo pt-4  '>Order History</p>
          <p className='text-center py-10 text-xl '>Seems like you are new !!!</p>
          <Link to="/"><p className="bg-customBlack  text-white font-bold py-2 px-4 rounded-xl text-center mb-4 hover:text-green-400 ">
        Shop Now
      </p></Link>
        </div>

       {user&&user.role==="admin" ?<div className='flex justify-center mt-10'>
          <Link to="/createProduct"><button  className=' cursor-pointer bg-green-600 hover:bg-green-700 transition ease-out duration-300 text-white rounded-3xl px-4 py-2'>Add Product</button></Link>
 
        </div>:null}

        <div className='flex justify-center mt-10 rounded-2xl'>
        {!showConfirmation&&<p onClick={() => setShowConfirmation(true)} className='cursor-pointer bg-customPurple hover:bg-pink-400 transition ease-out duration-300 text-white rounded-3xl px-4 py-2 '>Logout</p>}
        {showConfirmation && (
        <div className='bg-gray-300 py-4 px-6 rounded-2xl'>
          <p>Are you sure you want to logout?</p>
          <div className='flex justify-center mt-6'>
          <p className=" mr-6 cursor-pointer bg-green-600 hover:bg-green-800 transition ease-out duration-300 text-white rounded-3xl px-4 py-2" onClick={handleLogout} >Yes</p>
          <p className='cursor-pointer bg-red-600 hover:bg-red-800 transition ease-out duration-300 text-white rounded-3xl px-4 py-2' onClick={() => setShowConfirmation(false)}>Cancel</p>
          </div>
        </div>
      )}

        </div>
        <p className='text-center text-lg '>{user?.email}</p>
      </div>}
      

    </div>
  )
}

export default Account