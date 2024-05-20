import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from "../context/AuthContext"

function NavBar() {

  const { logoutUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  }
  return (
    <>
      <NavLink className="flex flex-row justify-between items-center
        w-full h-auto px-2
        border-b-2 border-slate-950">
        <h1 className='text-2xl w-auto m-2 font-semibold'>M.T.D</h1>
        <button
          className='bg-red-500 text-white p-2 rounded-md m-2 w-auto
          hover:bg-red-600 transition-colors duration-300 ease-in-out'
          onClick={handleLogout}>
          Logout
        </button>
      </NavLink>
    </>
  )
}

export default NavBar
