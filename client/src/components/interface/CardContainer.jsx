import React from 'react'
import Card from './Card'

const CardContainer = ({data}) => {
  return (
    <div className='overflow-x-auto flex w-full p-8   mt-10  '>
    {data? data.map((res)=><div className='w-full  mr-8  ' key={res._id}><Card  data={res}/></div>):null}
   </div> 

  )
}

export default CardContainer