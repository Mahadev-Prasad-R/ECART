import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
     <div className="rightNav flex gap-6">
             <Link to="/">Home</Link>
             <Link to="/login">Login</Link>
             <Link to="/register">Register</Link>
           </div>
  )
}

export default Menu