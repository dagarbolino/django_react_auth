import React from 'react'

import NavBar from '../components/NavBar'

const Dashboard = () => {


  return (
    <>
      <div className="max-w-6xl w-auto h-screen box-border m-0 p-0
      flex flex-col justify-start items-center
    bg-sky-200
    ">
        <NavBar />
        <div className="flex flex-col justify-center items-center m-6 ">
          <h1 className='text-3xl '>Title</h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard