import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/style.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LandingPage from './assets/pages/LandingPage.jsx';
import Login from './assets/pages/Login.jsx'; // ajuste conforme a localização real
import Signin from './assets/pages/Signin.jsx';
import Home from './assets/pages/Home.jsx';
import Shop from './assets/pages/Shop.jsx';
import Help from './assets/pages/Help.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'signin', element: <Signin /> },
      { path: 'home', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'help', element: <Help /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
