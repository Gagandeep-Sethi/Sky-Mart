import React from 'react'
import Display from './Display'
import MainContainer from './MainContainer'
const Body = () => {
  return (
    <div className='w-full h-full  bg-black'>
       <div><Display/></div>
        <div className='w-full '><MainContainer/></div>
        
    </div>
  )
}

export default Body