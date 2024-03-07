import React from 'react'
import ecom from "../images/e_com_logo.png"
import shoes from "../images/shoes.png"
import t_shirt from "../images/tshirt.png"
import bag from "../images/bag.png"
import radio from "../images/radio.png"
import price_tag from "../images/price_tag.png"
import truck from "../images/truck.png"
import  box from "../images/box.png"
import  secure from "../images/secure.png"



const Display = () => {
  return (
    <div className='pt-10'>
    <div className='w-full h-full  flex bg-black'>
        <div className='w-4/12  text-center  items-center justify-center flex' ><p className='bg-gradient-to-br from-customPurple to-white text-transparent bg-clip-text  font-shadows-into-light text-5xl font-semibold  '>Shopping    Simplified, Satisfaction Guaranteed</p>
</div>
    <div className='w-4/12 h-6/12  pt-24 pb-8  rounded-t-full bg-white ml-14'>
         <img src={ecom} alt=""/>
    </div>
    <div className='flex w-4/12 items-center justify-between ml-14  '>
        <div className=' '>
        <div className='relative  pt-12 rounded-t-full bg-white pb-4 m-4 '>
            <img className='w-40 h-36' src={t_shirt} alt=''/>
            <button className='bg-customPurple hover:bg-pink-400 transition ease-out duration-300 text-white rounded-3xl px-4 py-2 absolute left-[18%]'>Shop now</button>
        </div>
        <div className=' relative h-5/12 pt-12 rounded-t-full bg-white pb-4 m-4'>
            <img className='w-40 h-36' src={shoes} alt=''/>
            <button className='bg-customPurple hover:bg-pink-400 transition ease-out duration-300 text-white rounded-3xl px-4 py-2 absolute left-[18%]'>Shop now</button>
        </div>
        </div>
        <div className=''>
        <div className='relative h-5/12 pt-12 rounded-t-full bg-white pb-4 m-4'>
            <img className='w-40 h-36' src={bag} alt=''/>
            <button className='bg-customPurple hover:bg-pink-400 transition ease-out duration-300 text-white rounded-3xl px-4 py-2 absolute left-[18%]'>Shop now</button>
        </div>
        <div className='relative h-5/12 pt-12 rounded-t-full bg-white pb-4 m-4'>
            <img className='w-40 h-36' src={radio} alt=''/>
            <button className='bg-customPurple hover:bg-pink-400 transition ease-out duration-300 text-white rounded-3xl px-4 py-2 absolute left-[18%]'>Shop now</button>
        </div>
        </div>

    </div>
    </div>
    <div className='w-full flex justify-center'>
    <div className='flex w-2/3 justify-between rounded-full mt-14 bg-gradient-to-b from-customPurple to-black  '>
        <div className=" border-r-2 border-gray-400 flex items-center my-6 px-8 ">
            <img className='w-10 h-10' src={truck} alt=''/>
            <div className='ml-2'>
            <p className='text-white font-semibold '>Free Shipping</p>
            <p className='text-gray-400 font-extralight text-sm'>Above ₹500</p>
            </div>
        </div>
        <div className=" border-r-2 border-gray-400  flex items-center my-6 px-8">
            <img className='w-10 h-10' src={box} alt=''/>
            <div className='ml-2'>
            <p className='text-white font-semibold'>Free Returns</p>
            <p className='text-gray-400 font-extralight text-sm'>Within 30 days</p>
            </div>
        </div>
        <div className=" border-r-2 border-gray-400  flex items-center my-6 px-8">
            <img className='w-10 h-10' src={secure} alt=''/>
            <div className='ml-2'>
            <p className='text-white font-semibold'>100% Secure</p>
            <p className='text-gray-400 font-extralight text-sm'>Payment online</p>
            </div>
        </div>
        <div className="  flex items-center my-6 px-8 ">
            <img className='w-10 h-10' src={price_tag} alt=''/>
            <div className='ml-2'>
            <p className='text-white font-semibold'>Best Price</p>
            <p className='text-gray-400 font-extralight text-sm'>Guaranteed</p>
            </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Display