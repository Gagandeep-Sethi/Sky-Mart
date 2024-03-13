import React from 'react'
import CardContainer from './CardContainer'
import {  useSelector } from 'react-redux'

import useMainContainer from '../../utility/hooks/useMainContainer'
const MainContainer = () => {

  const products=useSelector(appStore=>appStore?.products)
  
  useMainContainer()
  
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