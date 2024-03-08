import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../utility/hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login,isLoading,error}=useLogin()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email,password)
  };

  return (
    
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-customPurple to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in </h2>
        </div>
        <form className="mt-8 space-y-6 bg-customBlack p-8 rounded-3xl" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          
            <div>
              
              <input
                type="email"
                autoComplete="email"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black  rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2 focus:z-10 mt-12 "
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              
              <input
                
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black  rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 mt-12"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          
          <div>
            <button disabled={isLoading}
              type="submit"
              className="group mb-4 mt-12 w-full flex justify-center py-2 px-4  text-lg font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700   ">
              Sign in
            </button>
          </div>
          {error&&<div className='text-red-600 text-lg'>{error} !!</div>}
          <p className='text-white'>Don't have an account ?<Link className='text-customPurple' to='/signup'>Sign up</Link></p>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
