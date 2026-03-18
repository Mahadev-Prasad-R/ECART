 import React, { useContext, useEffect, useState } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { authUser } from '../../../context/AuthUserContext';
import { signOut } from 'firebase/auth';
import { _Auth } from '../../../Backend/BackEndBaaS';
 import { useNavigate } from "react-router-dom";

const Menu = ({search,setSearch}) => {
  let dataa=useContext(authUser)
    console.log(dataa);

     

const navigate = useNavigate();

const logout = async () => {
  try {
    await signOut(_Auth);
    navigate("/login"); // redirect
    toast.success("Logged out successfully");
  } catch (err) {
    console.log(err);
  }
};

  useEffect(()=>{
setSearch(search)
  },[])

 function valid() {
  return (
    <div className="flex items-center gap-4">
      
      <section className='flex gap-2 items-center'>
        <img
          src={
            dataa?.photoURL ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUVPxK4e801-pumovRg0koRNu25ON_y6Fy0rIZnP2MsmTfUXQawW7_eI&s"
          }
          alt="profile"
          className="w-7 h-7 rounded-full"
        />
        <p className='text-white'>
  {dataa?.displayName || "User"}
</p>
 
      </section>

      <button
        onClick={logout}
        className='text-white cursor-pointer hover:text-red-400'
      >
        Logout
      </button>
      
    </div>
  );
}

  function invalid(){
    return(
      <>
      <NavLink className={({isActive})=>
      isActive?"text-cyan-400 underline":"text-gray-300"}to="/login">Login</NavLink>
      <NavLink className={({isActive})=>
      isActive?"text-cyan-400 underline":"text-gray-300"}to="/register">Register</NavLink>
      </>
    )
  }

  return (
    <div className="rightNav flex gap-6 items-center">

      <form className="relative">
        <CiSearch className="absolute left-2 top-2 text-gray-500" />

        <input
          type="text"
          placeholder="Search"
          className="pl-8 pr-4 py-1 rounded-md text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      </form>

      <NavLink
to="/"
  className={({ isActive }) => {
    return isActive ? "text-cyan-400 underline": "text-gray-300";
  }}
>
  Home
</NavLink>
       
          {
            //  dataa?.emailVerified===true?valid():invalid()
            dataa?valid():invalid()
          }
            
          
    </div>

     
  )
}

export default Menu