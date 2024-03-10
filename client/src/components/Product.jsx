import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id}=useParams()
    const [product,setProduct]=useState(null)
    const getData=async()=>{
        console.log("0")
        try {
            
        const data = await fetch(`http://localhost:5000/api/product/${id}`)
        
        if (!data.ok) {
            throw new Error("Failed to fetch product");
        }
        
        const json = await data.json()
        console.log(json)
        setProduct(json)
            
        } catch (error) {
            console.log(error)
        }
    
    }
    useEffect(()=>{
    getData()
    },[])

    console.log(id)
  return (
    <div className='min-h-screen flex'>
        <div className='mt-24 h-2/3 w-5/12'>
     <img className='rounded-2xl ml-6' src={product?.image} alt=''/>
     </div>
     <div className='bg-customPurple rounded-2xl ml-24 mt-24 text-white h-fit w-7/12 mr-6'>
        <p className='text-center font-exo text-4xl pt-10'>{product?.title}</p>
        <p className='mt-6 text-center text-lg '>{product?.description}</p>
        <p className='text-center mt-6 text-lg'>₹{product?.price}</p>
        <p className='mt-6 text-center text-lg mb-6'>{product?.rating?.rate}⭐️({product?.rating?.count})reviews</p>
        
     </div>
    </div>
  )
}

export default Product
