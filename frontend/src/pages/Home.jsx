import { jwtDecode } from 'jwt-decode'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext"


const Home = () => {
  const { user, logoutUser } = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (user) {
    const decoded = jwtDecode(token)
    let user_id = decoded.user_id
    console.log(user_id)
  }

  return (

    <div class='w-full
    flex flex-col justify-start items-start 
    '>
      <h1 class='text-2xl font-semibold
      flex flex-row justify-center items-center
      w-full h-10
      '>Home Page</h1>
      <p class='text-lg font-semibold
      flex flex-row justify-center items-center
      w-full h-10 mb-10
      '>This is the Homepage</p>

      {user ?
        <>
          <span className='text-4xl w-full h-auto mb-8
          flex flex-row justify-center items-center
          '>
            You are logged in
          </span>
          <br />
          <br />
          <div className="w-full flex flex-row">
            <div className="flex flex-col w-full">
              <Link
                className='text-blue-800'
                to="/dashboard">Dashboard</Link>
              <br />
              <Link
                className='text-blue-800'
                onClick={logoutUser}>Logout</Link>
            </div>
            <div className="flex flex-col w-full">
              <Link
                className='text-blue-800 border-2 border-blue-800 p-2 rounded-lg hover:bg-blue-800 hover:text-white transition duration-500 ease-in-out
                flex justify-center items-center'
                to="/">App</Link>

            </div>

          </div>
        </>
        :
        <>
          <span className='text-4xl mb-6'>
            You are not logged in
          </span>
          <br />
          <br />
          <Link
            className='text-blue-800 '
            to="/login">Login</Link>
          <br />
          <Link
            className='text-blue-800 '
            to="/register">Register</Link>
        </>
      }
    </div>
  )
}

export default Home