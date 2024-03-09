import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=''>
          <h3 className="text-2xl font-bold font-exo">Quick Contact</h3>
          <p className='pt-1 font-extralight'>If you have any questions or need help, feel free to contact our team</p>
          <h3 className='pt-4 text-xl'>Company address</h3>
          <p className='pt-1 font-extralight'>Gurugram ,Haryana,India</p>
          <p className='pt-4 text-xl'>Email address</p>
          <p className='pt-1 font-extralight'>skymart0@gmail.com</p>
          <p className='pt-4 text-xl'>Contact Info</p>
          <p className='pt-1 font-extralight'>+91 987654321</p>
        </div>
        <div>
          <p>&copy; 2024 <span className='text-xl font-exo'>Sky Mart</span>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
