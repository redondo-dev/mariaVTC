import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Acceuil from './pages/Acceuil';
import Services from './pages/Services';
import Apropos from './pages/Apropos';
import Client from './pages/Client';
import Transfert from './pages/Transfert';
import Error404 from './components/error/Error404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
    errorElement:<Error404 />,
  },
  
  
  {
    path: "/acceuil",
    element:<Acceuil/>,
   
  }, 

  {
    path: "/about",
    element:  <Apropos/>,
   
  },
  
 
  {
    path: "/services",
    element:  <Services/>,
   
  },

    {
      path: "/client",
      element: <Client /> 
    },
    {
      path: "/transfert",
      element: <Transfert /> 
    }
    
  
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
     
  </React.StrictMode>
);









