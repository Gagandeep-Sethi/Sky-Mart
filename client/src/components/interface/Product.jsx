import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    const {id}=useParams()
    const [product,setProduct]=useState(null)
    const [dltConfirm ,setDltConfirm]=useState(false)
    const user=useSelector(appStore=>appStore?.user?.user)

   const deleteProduct=async()=>{
    try {
      const data=await fetch(`http://localhost:5000/api/product/${id}`,{method:'DELETE'})
      if (data.ok) {
        
        setProduct(null)
        setDltConfirm(false)
    } else {
        console.error("Failed to delete product");
    }
    } catch (error) {
      console.log(error)
    }
    
   }

    const getData=async()=>{
        try {
            
        const data = await fetch(`http://localhost:5000/api/product/${id}`)
        
        if (!data.ok) {
            throw new Error("Failed to fetch product");
        }
        
        const json = await data.json()
        setProduct(json)
            
        } catch (error) {
            console.log(error)
        }
    
    }
    useEffect(()=>{
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!product)return <p className='text-center font-exo mt-[50%] xl:mt-[20%] text-5xl  xl:text-3xl min-h-screen'>OOPs!! product details not found .....</p>
  return (
    <div className='min-h-screen flex '>
        <div className='xl:mt-24 mt-[45%] h-2/3 w-5/12'>
     <img className='rounded-2xl ml-6' src={product?.image} alt=''/>
     </div>
     <div className='ml-24 xl:mt-24 mt-[45%] text-white h-fit w-7/12 mr-6'>

     <div className='bg-customPurple rounded-2xl '>

        <p className='text-center font-exo text-4xl pt-10'>{product?.title}</p>
        <p className='mt-6 text-center text-lg '>{product?.description}</p>
        <p className='text-center mt-6 text-lg'>₹{product?.price}</p>
        <p className='mt-6 text-center text-lg mb-6'>{product?.rating?.rate}⭐️({product?.rating?.count})reviews</p>
        
     </div >

     {user&&user.role==="admin"?<div className='flex justify-between mt-20'>
     <Link to={'/updateProduct/'+id} className='bg-green-600 text-white py-1 px-2 rounded-3xl'><button>Update Product</button></Link>
     <button onClick={()=>setDltConfirm(true)} className='bg-red-600 text-white py-1 px-2 rounded-3xl'>Delete Product</button>
     </div>:null}
     {dltConfirm&&<div className='bg-gray-800 py-4 px-6 rounded-2xl'>
          <p>Are you sure you want to delete product?</p>
          <div className='flex justify-center mt-6'>
          <p className=" mr-6 cursor-pointer bg-green-600 hover:bg-green-800 transition ease-out duration-300 text-white rounded-3xl px-4 py-2" onClick={deleteProduct} >Yes</p>
          <p className='cursor-pointer bg-red-600 hover:bg-red-800 transition ease-out duration-300 text-white rounded-3xl px-4 py-2' onClick={() => setDltConfirm(false)}>Cancel</p>
          </div>
        </div>}
     </div>
    </div>
  )
}

export default Product
