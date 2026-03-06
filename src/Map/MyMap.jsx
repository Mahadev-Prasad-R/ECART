 import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/NavbarComp/Layout'
import Home from '../Components/NavbarComp/pages/Home'
import Login from '../Components/NavbarComp/pages/Auth/Login'
import Register from '../Components/NavbarComp/pages/Auth/Register'

export let myMap = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])