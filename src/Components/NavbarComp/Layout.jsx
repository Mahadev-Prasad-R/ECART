import React from 'react'
import NavBar from './pages/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div> 
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout