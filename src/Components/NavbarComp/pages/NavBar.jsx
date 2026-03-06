 import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
    <nav className='w-[100vw] h-[75px] bg-black flex items-center justify-between px-10 text-white'>
      <Logo/>

       <Menu/>

        
    </nav>
  )
}

export default NavBar