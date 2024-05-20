import { jwtDecode } from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import useAxios from "../utils/useAxios"


const Dashboard = () => {
  const [response, setResponse] = useState("")
  const api = useAxios();
  const token = localStorage.getItem("authTokens")
  const { logoutUser } = useContext(AuthContext)


  const decode = jwtDecode(token)
  // console.log(decode)
  let user_id = decode.user_id
  let username = decode.username
  let email = decode.email
  let fullName = decode.fullName


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/")
        setResponse(response.data.response)

      } catch (error) {
        console.log(error)
        setResponse("Something Went Wrong")
      }
    }

    fetchData()

  }, [api])


  return (
    <div className='w-full
    flex flex-col justify-start items-start 
    '>
      <h1 className='text-4xl font-bold
      flex flex-row justify-center items-center
      w-full h-10'>
        Dashboard
      </h1>
      <p className='text-xl font-semibold m-2'>Welcome, {username}</p>
      <span className='text-lg'>Your Cridentials are as follows</span>
      <br />
      <span className='text-lg'>Username: {username}</span>
      <br />
      <span>UserID: {user_id}</span>
      <br />
      <span>Full Name: {fullName}</span>
      <br />
      <span>Email: {email}</span>
      <br /><br />
      <span className='text-lg font-semibold p-1 m-2 
      flex flex-row justify-center items-center
      w-full h-auto
      '>{response}</span>
      <br /><br />
      <Link
        className='text-blue-800'
        to="/">Home</Link>
      <br />
      <Link
        className='text-blue-800'
        onClick={logoutUser}>Logout</Link>

    </div>
  )
}

export default Dashboard