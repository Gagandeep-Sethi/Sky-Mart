import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Card from './Card'

const Category = () => {
    const {type}=useParams()
    const products = useSelector(appStore => appStore?.products);
    const category = products[type];
    console.log(category)
  return (
    <div className='min-h-screen bg-customBlack'>
        <div className='overflow-x-auto flex w-full p-8   pt-[10%]  '>
    {category? category.map((res)=><div className='w-full  mr-8  ' key={res._id}><Card  data={res}/></div>):<div ><p className='w-screen mt-[10%] text-center text-white font-shadows-into-light text-5xl'>Search for items.....</p><Link to="/"><button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 mt-9 ml-[45%]">
        Go back to home
      </button></Link></div>

    }
   </div> 
    </div>
  )
}

export default Category