 import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = ({search,setSearch}) => {
  return (
    <nav className='w-[100vw] h-[75px] bg-black flex items-center justify-between px-10 text-white border-b-2 border-b-blue-700'>
      <Logo/>
       <Menu search={search} setSearch={setSearch}/>
        
 
    </nav>
  )
}

export default NavBar