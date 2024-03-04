import React from 'react'

const Search = () => {
  return (
    <div className='w-full'>
        <form className=" w-full flex" onSubmit={(e)=>e.preventDefault()}>
            <input className='w-[80%] rounded-xl px-4 py-2 font-semibold' placeholder="Search..." type='text'></input>
            <button className='bg-white py-2 px-4 rounded-xl ml-2 font-bold' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Search