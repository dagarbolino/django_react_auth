import React from 'react'

function Margin() {
  return (
    <>
      <h2 className='md:text-2xl font-semibold'>Margins</h2>
      <section
        className='border-4 border-slate-950 rounded-md 
          w-full min-h-32 h-auto  mb-6
          flex flex-col justify-start items-center '>
        <table className="w-full">
          <thead className='flex flex-row justify-start items-start m-2'>
            <tr className='flex flex-row justify-start items-start w-full'>
              <th className='w-full border border-slate-950'>Product</th>
              <th className='w-full border border-slate-950'>Date</th>
              <th className='w-full border border-slate-950'>Type</th>
              <th className='w-full border border-slate-950'>Prix Achat</th>
              <th className='w-full border border-slate-950'>Prix Vente</th>
              <th className='w-full border border-slate-950'>Marge</th>
            </tr>
          </thead>
          <tbody>
            <tr className='flex flex-row justify-start items-start w-auto m-2'>
              <td className='w-full border border-slate-950'>...</td>
              <td className='w-full border border-slate-950'>01/01/2024</td>
              <td className='w-full border border-slate-950'>...</td>
              <td className='w-full border border-slate-950'>10 €</td>
              <td className='w-full border border-slate-950'>20 €</td>
              <td className='w-full border border-slate-950'>50 %</td>
            </tr>
          </tbody>
        </table>

      </section>


    </>
  )
}

export default Margin
