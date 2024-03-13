import './App.css';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Header from './components/interface/Header';

import Footer from './components/interface/Footer';
 import Body from './components/interface/Body';
import Error from './components/interface/Error';
import Signup from './components/user/Signup';
import Login from './components/user/Login';

import WishList from './components/interface/WishList';
import Cart from './components/interface/Cart';
import Account from './components/interface/Account';
import Notify from './components/interface/Notify';
import Product from './components/interface/Product';
import UpdateProduct from './components/product/UpdateProduct';
import NewProduct from './components/product/NewProduct';
import Payment from './components/interface/Payment';
import Category from './components/interface/Category';

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
