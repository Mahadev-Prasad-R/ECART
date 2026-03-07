import React from 'react'
import NavBar from './pages/NavBar'
import { Outlet } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const Layout = () => {
  return (
    <div> 
        <NavBar/>
        <Outlet/>
        <Toaster/>
    </div>
  )
}

export default Layout