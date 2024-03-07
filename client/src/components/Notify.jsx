import React from 'react'
import { Link } from 'react-router-dom'

const Notify = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-customPurple text-white">
      <p className="text-6xl mb-8 font-shadows-into-light">No New Notifications !!</p>
      <Link to="/"><button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        Go back to home
      </button></Link>
    </div>
  )
}
export default Notify