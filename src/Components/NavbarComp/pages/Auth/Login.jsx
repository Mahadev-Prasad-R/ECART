import React, { useState } from 'react'

const Login = () => {
  let [data,setData]=useState({
    email:"",
    password:""
  })

  function handleLogin(e){
let {value,name}=e.target
setData({
  ...data,
  [name]:value
})
  }
  function handleSubmit(e){
e.e.preventDefault()
}
  return (
     <section className='w-full min-h-screen flex items-center justify-center bg-amber-50 '> 
        
       <div className='space-y-4 tracking-wider flex flex-col items-center mt-[-150px]' >
         <h1 className='text-purple-600 items-center mb-4 text-2xl font-extrabold'>LOGIN FORM</h1>
          <div className='w-[380px] h-[300px] bg-gray-600 p-8 rounded-b-xl '>
            <form onSubmit={handleSubmit}>
         
       <div>
        <label htmlFor="" className='text-2xl  font-medium text-amber-50'>Enter your name</label>
          <input type="email"  
          name='email'
          value={data.email}
          placeholder='enter your mail' 
          onChange={handleLogin}
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          
       </div>

       <div>
        <label className='text-2xl gap-1 text-amber-50'>password</label>
          <input type="password"
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"  
          name='password'
          value={data.password}
          placeholder='enter your password' 
          onChange={handleLogin}/>
       </div><br />

        <div className='flex justify-center'>
           <input type="submit" value='Login'className='w-24 bg-purple-500 py-2 text-white rounded-md tracking-wide transition hover:bg-purple-600' />
        </div>
      
       </form>
       </div>
          </div>
           
     </section>
  )
}

export default Login