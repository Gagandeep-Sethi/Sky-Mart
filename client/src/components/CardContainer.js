import React from 'react'
import Card from './Card'

const CardContainer = ({data}) => {
    console.log(data)
  return (
    <div className='overflow-x-auto flex w-full     '>
    {data? data.map((res)=><div className='w-full mt-10 mr-8  ' key={res._id}><Card  data={res}/></div>):null

    }
   </div> 
    
    
  )
}

export default CardContainer





// {/* <div className="relative overflow-x-auto">
//   <div className="flex p-4 space-x-4 relative ">
  
//      {data? data.map((res)=><div className='w-full mt-10 mr-8  ' key={res._id}><Card  data={res}/></div>):null

//      }
    
//   </div>
//   <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0 overflow-x-auto">
//     <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
//   </div>
// </div> 