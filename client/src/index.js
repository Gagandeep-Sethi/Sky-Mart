import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider} from 'react-redux';
import appStore from './utility/store/appStore';


const AppContainer = () => {

  return (
    <Provider store={appStore}>
      <App/>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppContainer />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import Body from './components/Body';
// import Error from './components/Error';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import { Provider, useSelector } from 'react-redux';
// import appStore from './utility/store/appStore';
// import WishList from './components/WishList';
// import Cart from './components/Cart';
// import Account from './components/Account';
// import Notify from './components/Notify';
// import Product from './components/Product';
// import UpdateProduct from './components/UpdateProduct';
// import NewProduct from './components/NewProduct';

// const AppContainer = () => {
//   const user = useSelector(appStore => appStore.user.user);

  

//   const appRounter = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />,
//       children: [
//         { path: '/', element: <Body /> },
//         { path: '/signup', element:user? <Navigate to='/'/>: <Signup /> },
//         { path: '/login', element: user? <Navigate to='/'/> :<Login/> }, 
//         { path: '/wishlist', element: <WishList /> },
//         { path: '/cart', element: <Cart /> },
//         { path: '/account', element: <Account /> },
//         { path: '/notification', element: <Notify /> },
//         { path: '/product/:id', element: <Product /> },
//         { path: '/updateProduct/:id', element: <UpdateProduct /> },
//         { path: '/createProduct', element: <NewProduct /> }
//       ],
//       errorElement: <Error />
//     }
//   ]);

//   return (
//     <Provider store={appStore}>
//       <RouterProvider router={appRounter} />
//     </Provider>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppContainer />);
