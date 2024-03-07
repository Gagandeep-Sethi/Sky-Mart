import React, {  useEffect } from 'react';

const PopUpMessage = ({ message, setShowPopup }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [setShowPopup]);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center ">
      <div className="bg-pink-600 font-exo text-white px-4 py-2 rounded-xl m-4">
        {message}
      </div>
    </div>
  );
};

export default PopUpMessage;
