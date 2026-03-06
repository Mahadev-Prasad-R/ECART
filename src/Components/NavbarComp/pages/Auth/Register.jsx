 import React, { useState } from 'react'
 import {createUserWithEmailAndPassword} from 'firebase/auth'
import { _Auth } from '../../../../Backend/BackEndBaaS'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  function handlingData(e){
    const {name,value} = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }
   
//& handle submit
  async function handleSubmit(e){
  e.preventDefault()
  let {email,password}=userData

  let Firedata= await createUserWithEmailAndPassword(_Auth,userData.email,userData.password )
  console.log(Firedata)

  

  alert("Registration successful")
  setUserData({
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    })
  console.log(userData)
}

  function resetForm(){
    setUserData({
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    })
  }

  return (
     <section className="w-full min-h-screen flex items-center justify-center bg-gray-100">
 
      <div className="w-[380px] bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handlingData}
              
              placeholder="Enter username"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handlingData}
              placeholder="Enter email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              
              name="password"
              value={userData.password}
              onChange={handlingData}
              placeholder="Enter password"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handlingData}
              placeholder="Confirm password"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>

        </form>

        <button
          onClick={resetForm}
          className="w-full mt-3 border border-gray-400 py-2 rounded-md hover:bg-gray-100"
        >
          Reset
        </button>

      </div>

    </section>
  )
}

export default Register