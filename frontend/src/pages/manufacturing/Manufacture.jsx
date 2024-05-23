import React from 'react'

function Manufacture() {
  return (
    <>
                <h2 className='md:text-2xl font-semibold'>Manufacturing</h2>
          <section
            className='border-4 border-slate-950 rounded-md bg-sky-200
          w-full min-h-32 h-auto  mb-6
          flex flex-col justify-start items-center '>
            <table className="w-full">
              <thead className='flex flex-row justify-start items-start m-2 bg-white'>
                <tr className='flex flex-row justify-start items-start w-full'>
                  <th className='w-full border border-slate-950'>Product</th>
                  <th className='w-full border border-slate-950'>Date</th>
                  <th className='w-full border border-slate-950'>Type</th>
                  <th className='w-full border border-slate-950'>Origine</th>
                  <th className='w-full border border-slate-950'>N° lot</th>
                  <th className='w-full border border-slate-950'>Poids</th>
                  <th className='w-full border border-slate-950'>Poids fini</th>

                </tr>
              </thead>
              <tbody>
                <tr className='flex flex-row justify-start items-start w-auto m-2 bg-white'>
                  <td className='w-full border border-slate-950'>...</td>
                  <td className='w-full border border-slate-950'>01/01/2024</td>
                  <td className='w-full border border-slate-950'>...</td>
                  <td className='w-full border border-slate-950'>France</td>
                  <td className='w-full border border-slate-950'>123456</td>
                  <td className='w-full border border-slate-950'>10 kg</td>
                  <td className='w-full border border-slate-950'>12 kg</td>

                </tr>
              </tbody>
            </table>

          </section>


    </>
  )
}

export default Manufacture
