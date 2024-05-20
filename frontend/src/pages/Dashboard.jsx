import React from 'react'

import NavBar from '../components/NavBar'
import Clean from './cleanings/Clean'
import Deliveries from './deliveries/Deliveries'
import Inventory from './inventory/Inventory'
import Manufacture from './manufacturing/Manufacture'
import Margin from './margin/Margin'
import Traceability from './traceability/Traceability'
import Yields from './yields/Yields'

const Dashboard = () => {


  return (
    <>
      <div className="max-w-6xl w-auto  box-border m-0 p-0
      flex flex-col justify-start items-center
    bg-sky-200
    ">
        <NavBar />
        <div className="font-semibold text-lg sm:text-2xl md:text-3xl 
        flex flex-col justify-center items-center my-6 ">
          <h1 className=''>Management Traditional Department </h1>
        </div>

        <article className="flex flex-col justify-center items-center 
        w-11/12 h-auto gap-4 mb-8 m-4 p-4
        ">

          <Yields />
          <Inventory />
          <Deliveries />
          <Margin />
          <Manufacture />
          <Traceability />
          <Clean />

        </article>

      </div>
    </>
  )
}

export default Dashboard