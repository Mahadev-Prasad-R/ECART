 import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = ({search,setSearch}) => {
  return (
    <nav className='w-full min-h-[75px] py-4 bg-black flex flex-wrap items-center justify-between px-4 md:px-10 text-white border-b-2 border-b-blue-700 gap-y-4'>
      <div className="flex-shrink-0">
        <Logo/>
      </div>
       <Menu search={search} setSearch={setSearch}/>
    </nav>
  )
}

export default NavBar