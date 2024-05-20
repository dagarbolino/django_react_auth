import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {
  const { loginUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)

    const email = e.target.email.value
    const password = e.target.password.value

    loginUser(email, password)
  }
  return (
    <div className='w-full h-96  
    flex flex-col justify-start items-start '>
      <h1 className='text-2xl font-semibold
      flex flex-row justify-center items-center
      w-full h-10'>Login</h1>
      <p className='text-lg font-semibold
      flex flex-row justify-center items-center
      w-full h-10 mb-6'>Sign Into Your Account</p>




      <form onSubmit={handleSubmit}>

        <label className='text-lg font-semibold
        w-full h-10
        '>Email:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="email"
          name="email"
          required />


        <label className='text-lg font-semibold
        w-full h-10
        '>Password:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="password"
          name="password"
          required />

        <div className='flex flex-row justify-start items-start
        text-blue-800
        w-full h-auto mt-8
        '>
          <button type='submit'>Login</button>
        </div>
        <span className='flex flex-col text-md'>Don't Have an Account
          <Link
            className='text-blue-800'
            to="/register">Register</Link>
        </span>

      </form>
    </div>
  )
}

export default Login