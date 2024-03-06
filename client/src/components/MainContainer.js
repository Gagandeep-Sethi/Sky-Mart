import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'

const MainContainer = () => {
 
  const [res,setRes]=useState([])

  const getData=async()=>{
    const data =await fetch('http://localhost:5000/api/product')
    const json= await data.json()
    console.log(json)
    setRes(json)
    }
  
    useEffect(()=>{
     getData()
    },[])
  return (
    <div className='mt-24 w-full '>
        <h1 className='text-5xl  font-mono font-light text-white text-center '>New <span className='text-customPurple'>Arrivals</span></h1>
        <div>
        <h1 className='text-3xl  font-mono font-light text-customPurple ml-4 mt-14'>Men's <span className='text-white'>Clothing</span></h1>
        </div>
        <div className='w-full'><CardContainer data={res}/></div>
        
    </div>
    
  )
}

export default MainContainer