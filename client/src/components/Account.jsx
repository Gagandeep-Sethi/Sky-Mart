import React from 'react'
import Login from './Login'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Account = () => {
  const user=useSelector(appStore=>appStore.user.user)
  console.log(user)
  return (
    <div>{!user?<Login/>:
      <div className='bg-gray-100'>
        <p className='text-6xl text-center pt-10 font-shadows-into-light'>Hi , {user?.username}</p>
        <div className='bg-customPurple mx-72 rounded-3xl mt-14' >
          <p className='text-center text-3xl text-white text-exo pt-4  '>Track Orders</p>
          <p className='text-center py-10 text-xl '>OOPs !!! no orders to track right now</p>
        </div>
        <div className='bg-customPurple mx-72 rounded-3xl mt-14' >
          <p className='text-center text-3xl text-white text-exo pt-4  '>Order History</p>
          <p className='text-center py-10 text-xl '>Seems like you are new !!!</p>
          <Link to="/"><p className="bg-customBlack  text-white font-bold py-2 px-4 rounded-xl text-center mb-4 ">
        Shop Now
      </p></Link>
        </div>
      </div>}
      

    </div>
  )
}

export default Account