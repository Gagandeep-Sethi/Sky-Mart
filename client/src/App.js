import './App.css';
 import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


  

import React from 'react';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Body from './components/Body';
import Error from './components/Error';
import Signup from './components/Signup';
import Login from './components/Login';
import { useSelector } from 'react-redux';

import WishList from './components/WishList';
import Cart from './components/Cart';
import Account from './components/Account';
import Notify from './components/Notify';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct';
import NewProduct from './components/NewProduct';
import Payment from './components/Payment';
import Category from './components/Category';

const  App=()=>{
  return (
    <div className="App h-screen w-screen">
      <div className='h-[10%] w-full ' ><Header/></div>
      <div className=' w-full  '><Outlet/></div>
      <div><Footer/></div>
    </div>
  );
}

const AppContainer = () => {
  const user = useSelector(appStore => appStore.user.user);

  

  const appRounter = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Body /> },
        { path: '/signup', element:user? <Navigate to='/'/>: <Signup /> },
        { path: '/login', element: user? <Navigate to='/'/> :<Login/> }, 
        { path: '/wishlist', element: <WishList /> },
        { path: '/cart', element: <Cart /> },
        { path: '/account', element: <Account /> },
        { path: '/notification', element: <Notify /> },
        { path: '/product/:id', element: <Product /> },
        { path: '/updateProduct/:id', element:user&& user.role==="admin"?  <UpdateProduct />:<Navigate to='/'/> },
        { path: '/createProduct', element:user&& user.role==="admin"?  <NewProduct />:<Navigate to='/'/> },
        { path: '/payment', element: <Payment /> },
        { path: '/category/:type', element: <Category /> }
      ],
      errorElement: <Error />
    }
  ]);

  return (
    
      <RouterProvider router={appRounter} />
    
  );
};

export default AppContainer
