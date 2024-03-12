import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../utility/hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername]=useState('')
  const {signUp,isLoading,error}=useSignup()
console.log(error)
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signUp(username,email,password)
    
  };

  return (
    <div className="h-screen flex xl:items-center justify-center bg-gradient-to-t from-customPurple to-black pt-64 xl:py-12 px-4 sm:px-6 lg:px-8">
      <div className="xl:max-w-md max-w-3xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign Up </h2>
        </div>
        <form className="mt-8 space-y-6 bg-customBlack p-8 rounded-3xl" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              
              <input
                
                name="username"
                type="text"
                autoComplete="current-username"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black  rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2 focus:z-10 "
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              
              <input
                
                name="email"
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
                
                name="password"
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
              className="group mb-4 mt-12 w-full flex justify-center py-2 px-4  text-lg font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </button>
          </div>
          {error&&<div className='text-red-600 text-lg'>{error} !!</div>}
          <p className='text-white'>Arleady have an account ?<Link className='text-customPurple' to='/login'>Signin</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
