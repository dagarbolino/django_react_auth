import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext"


const Register = () => {
  const [full_name, setFull_name] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const { registerUser } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(full_name)
    console.log(email)
    console.log(username)

    registerUser(full_name, email, username, password, password2)
  }

  return (
    <div className='w-full
    flex flex-col justify-start items-start '>
      <h1 className='text-2xl font-semibold
      flex flex-row justify-center items-center
      w-full h-10'>Register</h1>
      <p className='text-lg font-semibold
      flex flex-row justify-center items-center
      w-full h-10 mb-6'>Create a new account</p>




      <form>
        <label className='text-lg font-semibold
        w-full h-10'
        >Full Name:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="text"
          name="full_name"
          onChange={(e) => setFull_name(e.target.value)}
          required />

        <label>Email:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required />

        <label className='text-lg font-semibold
        w-full h-10'
        >Username:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required />

        <label className='text-lg font-semibold
        w-full h-10'
        >Password:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required />

        <label className='text-lg font-semibold
        w-full h-10'
        >Confirm Password:</label>
        <input
          className='w-full h-10 border-sky-800 rounded-2xl border-2 p-1'
          type="password"
          name="password2"
          onChange={(e) => setPassword2(e.target.value)}
          required />

        <div className='flex flex-row justify-start items-start
        text-blue-800
        w-full h-auto mt-8'>
          <button onClick={handleSubmit} type='button'>Register</button>
        </div>
        <span className='flex flex-col text-md'>Already Have an Account
          <Link
            className='text-blue-800'
            to="/login">Login</Link>
        </span>

      </form>
    </div>
  )
}

export default Register