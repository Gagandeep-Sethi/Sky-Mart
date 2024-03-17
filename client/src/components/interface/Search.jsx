
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {  //ref value is actually inside ref.current
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); //this return prevents memory leaks and removes eventlistner when component unmount
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };
  
  

  return (
    <div className='w-full'>
      <div className=" w-full flex justify-center" >
        <div className="relative w-full" ref={dropdownRef}>
          <input
            className=' w-[90%] rounded-xl px-4 py-2 font-semibold'
            placeholder="Search..."
            type='text'
            onFocus={() => setShowDropdown(true)}
            value={selectedOption}
            readOnly
          />
          {showDropdown && (
            <div className="absolute bg-white rounded-xl shadow-md  mt-1 w-[90%]">
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("menWears")}
              >
                Men's Clothing
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("womenWears")}
              >
                Women's Clothing
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("electronics")}
              >
                Electronics
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick("shoes")}
              >
                Shoes
              </div>
            </div>
          )}
        </div>
        <Link to={'/category/'+selectedOption}><button className='bg-white  py-2 px-4 rounded-xl  font-bold' type='submit'>Search</button></Link>
      </div>
    </div>
  );
};

export default Search;
