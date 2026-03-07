import React, { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { _Auth } from '../../../../Backend/BackEndBaaS'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  //& show password 
  const [showPassword, setShowPassword] = useState(false)

  let bhootni = useNavigate()

  function handlingData(e) {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  //& handle submit
  async function handleSubmit(e) {
    e.preventDefault()
    let { email, password } = userData
    try {
      if (userData.password === userData.confirmPassword) {

        let Firedata = await createUserWithEmailAndPassword(_Auth, email, password)
        console.log(Firedata)

        let verify = await sendEmailVerification(Firedata.user)
        console.log(verify);

        toast.success('sent succesfully')
        bhootni('/login')

      }

    } catch (error) {
      console.log(error)
      toast.error('error')

      //& clear password 
      setUserData({
        ...userData,
        password:""
      })
    }




    setUserData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    console.log(userData)
  }

  function resetForm() {
    setUserData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
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
              type='text'
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

          <div className="relative">
            <label className="text-sm font-medium">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              minLength={6}
              name="password"
              value={userData.password}
              onChange={handlingData}
              placeholder="Enter password"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword ?  <FaEye /> :<FaEye /> }
            </span>
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