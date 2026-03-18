import React, { useState } from 'react'
import NavBar from './pages/NavBar'
import { Outlet } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const Layout = () => {
  let [search,setSearch]=useState("")
  
  return (
    <div> 
        <NavBar search={search} setSearch={setSearch}/>
        <Outlet context={{search}}/>
        <Toaster/>
    </div>
  )
}

export default Layout