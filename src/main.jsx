import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { router } from './Routes/Routes';
import React from 'react';
import AuthContext from './Component/AuthContext/AuthContext';
 





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
        <AuthContext>
        <RouterProvider router={router} />
         <Toaster></Toaster>
        </AuthContext>
   
  </React.StrictMode>,
 
)
