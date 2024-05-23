import React from 'react'

function Deliveries() {
  return (
    <>
                <h2 className='md:text-2xl font-semibold'>Deliveries</h2>
          <section
            className='border-4 border-slate-950 rounded-md bg-sky-200
          w-full min-h-32 h-auto  mb-6
          flex flex-col justify-start items-center '>
            <table className="w-full">
              <thead className='flex flex-row justify-start items-start m-2 bg-white'>
                <tr className='flex flex-row justify-start items-start w-full'>
                  <th className='w-full border border-slate-950'>Name</th>
                  <th className='w-full border border-slate-950'>Date</th>
                  <th className='w-full border border-slate-950'>Type</th>
                  <th className='w-full border border-slate-950'>Prix HT</th>
                </tr>
              </thead>
              <tbody>
                <tr className='flex flex-row justify-start items-start w-auto m-2 bg-white'>
                  <td className='w-full border border-slate-950'>Elivia</td>
                  <td className='w-full border border-slate-950'>01/01/2024</td>
                  <td className='w-full border border-slate-950'>1/2 Vache</td>
                  <td className='w-full border border-slate-950'>1100 €</td>
                </tr>
              </tbody>
            </table>

          </section>


    </>
  )
}

export default Deliveries
