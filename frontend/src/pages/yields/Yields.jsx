import React from 'react'

function Yields() {
  return (
    <>

      <h2 className='md:text-2xl font-semibold'>Yields</h2>
      <section
        className='border-4 border-slate-950 rounded-md 
          w-full min-h-32 h-auto mb-6
          flex flex-col justify-start items-center '>

        <table className="w-full">
          <thead className='flex flex-row justify-start items-start m-2'>
            <tr className='flex flex-row justify-start items-start w-full'>
              <th className='w-full border border-slate-950'>Name</th>
              <th className='w-full border border-slate-950'>Date</th>
              <th className='w-full border border-slate-950'>Type Animal</th>
              <th className='w-full border border-slate-950'>Rendement</th>
            </tr>
          </thead>
          <tbody>
            <tr className='flex flex-row justify-start items-start w-auto m-2'>
              <td className='w-full border border-slate-950'>Alex</td>
              <td className='w-full border border-slate-950'>01/01/2024</td>
              <td className='w-full border border-slate-950'>Blanc Bleu Belge</td>
              <td className='w-full border border-slate-950'>44 %</td>
            </tr>
          </tbody>
        </table>

      </section>

    </>
  )
}

export default Yields
