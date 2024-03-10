import React, { useEffect } from 'react'
import CardContainer from './CardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { addElectronics, addMenWears, addShoes, addWomenwears } from '../utility/store/productSlice'

const MainContainer = () => {
  const dispatch=useDispatch()
  const products=useSelector(appStore=>appStore?.products)
  

  const getData=async()=>{
    const data =await fetch('http://localhost:5000/api/product')
    const json= await data.json()
    const menWears=json?.filter(res=>res.category==="men's clothing")
    const womenWears=json?.filter(res=>res.category==="women's clothing")
    const electronics=json?.filter(res=>res.category==="electronics")
    const shoes=json?.filter(res=>res.category==="shoes")
    console.log(json)
    dispatch(addMenWears(menWears))
    dispatch(addWomenwears(womenWears))
    dispatch(addShoes(shoes))
    dispatch(addElectronics(electronics))
    }
  
    useEffect(()=>{
     getData()
    },[])
    if(!products.menWears)return null
     return (
    <div className='mt-24 w-full '>
        <h1 className='text-5xl  font-mono font-light text-white text-center '>New <span className='text-customPurple'>Arrivals</span></h1>
        <div>
        <div>
        <h1 className='text-3xl  font-mono font-light text-customPurple ml-4 mt-14'>Men's <span className='text-white'>Clothing</span></h1>
        </div>
        <div className='w-full'><CardContainer data={products?.menWears}/></div>
        </div>
        <div>
        <div>
        <h1 className='text-3xl  font-mono font-light text-customPurple ml-4 mt-14'>Women's <span className='text-white'>Clothing</span></h1>
        </div>
        <div className='w-full'><CardContainer data={products?.womenWears}/></div>
        </div>
        <div>
        <div>
        <h1 className='text-3xl  font-mono font-light text-customPurple ml-4 mt-14'>Foot<span className='text-white'>wear</span></h1>
        </div>
        <div className='w-full'><CardContainer data={products?.shoes}/></div>
        </div>
        <div>
        <div>
        <h1 className='text-3xl  font-mono font-light text-customPurple ml-4 mt-14'>Elect<span className='text-white'>ronics</span></h1>
        </div>
        <div className='w-full'><CardContainer data={products?.electronics}/></div>
        </div>
        
        
    </div>
    
  )
}

export default MainContainer