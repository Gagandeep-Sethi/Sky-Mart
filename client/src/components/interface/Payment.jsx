import React, { useState } from 'react';
import PopUpMessage from '../../utility/PopUpMessage';

const Payment = () => {


const [showPopup, setShowPopup] = useState(false);

  
  return (
    <div className="  xl:items-center   pt-64 xl:py-12 px-4 sm:px-6 lg:px-8 flex justify-center pb-96 xl:pb-0  xl:h-screen bg-gradient-to-t from-customPurple to-black">
      <div className="bg-white p-8 rounded shadow-md  xl:max-w-md max-w-3xl w-full space-y-8">
        <h1 className="text-2xl font-bold mb-4">Address & Payment Details</h1>
        <form className='mt-8 space-y-6 bg-gray-400 p-8 rounded-3xl'>
        <div className="mb-4">
            <label for="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              required

              name="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Street name,City,State"
            />
          </div>
          <div className="mb-4">
            <label for="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              required

              name="cardNumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4">
            <label for="expiry" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              required

              name="expiry"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-4">
            <label for="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              required

              name="cvv"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="123"
            />
          </div>
          <button onClick={(e)=>{e.preventDefault()
            setShowPopup(true)}}
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Pay and complete order
          </button>
        </form>
      </div>
      {showPopup && <PopUpMessage message="Order placed continue shopping" setShowPopup={setShowPopup} />}
    </div>
  );
};

export default Payment;
