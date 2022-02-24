import React, { useContext } from 'react'
import { dataSharingPoint } from './Context'

function WelcomePage() {
    const { setOpen } = useContext(dataSharingPoint)
    function handleOpen() {
        setOpen(true)
    }
  return (
      <div  className='flex flex-col justify-center items-center border-2 h-screen w-screen '>
         <img className="shadow-xl h-1/2 " src="card1.jpg" alt="entrypage" />
          <buttom className="bg-[#9B1D3A] text-white mt-10  rounded p-3 items-center w-16 font-bold " onClick={handleOpen}>Open</buttom>
     </div>
  )
}

export default WelcomePage