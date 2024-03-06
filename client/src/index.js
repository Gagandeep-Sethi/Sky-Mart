import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Body from './components/Body';
import Error from './components/Error';
import Signup from './components/Signup';
import Login from './components/Login';
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
      
    }

  ],
  errorElement:<Error/>

  }
])

root.render(
  <RouterProvider router={appRounter}/>
);


