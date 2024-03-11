import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Body from './components/Body';
import Error from './components/Error';
import Signup from './components/Signup';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utility/store/appStore';
import WishList from './components/WishList';
import Cart from './components/Cart';
import Account from './components/Account';
import  Notify  from './components/Notify';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct';
import NewProduct from './components/NewProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));

const appRounter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
    {
      path:"/signup",
      element:<Signup/>
      
    },
    {
      path:"/login",
      element:<Login/>
      
    },
    {
      path:"/wishlist",
      element:<WishList/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/account",
      element:<Account/>
    },
    {
      path:'/notification',
      element:<Notify/>
    },
    {
      path:'/product/:id',
      element:<Product/>
    },
    {
      path:'/updateProduct/:id',
      element:<UpdateProduct/>
    },
    {
      path:'/createProduct/:id',
      element:<NewProduct/>
    }

  ],
  errorElement:<Error/>

  }
])

root.render(
  <Provider store={appStore}>
  <RouterProvider router={appRounter}/>
  </Provider>
);


