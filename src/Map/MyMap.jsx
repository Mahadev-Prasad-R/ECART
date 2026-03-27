 import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/NavbarComp/Layout'
 
import Login from '../Components/NavbarComp/pages/Auth/Login'
import Register from '../Components/NavbarComp/pages/Auth/Register'
import Home from '../Components/HomeContainer/Home'
import ProductDetails from '../Components/HomeContainer/ProductDetails'
import Cart from '../Components/Cart/Cart'
import Wishlist from '../Components/wishlist/Wishlist'

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
        path: '/productDetails/:id',
        element: <ProductDetails/>
      },
       {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      }
    ]
  }
])