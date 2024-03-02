import React, { useEffect } from 'react'

const Header = () => {
    const getData=async()=>{
        const data= await fetch('https://fakestoreapi.com/products')
        const json=await data.json()
        console.log(json)
    }
    useEffect(()=>{
     getData()
    },[])
  return (
    <div>Header</div>
  )
}

export default Header