import React, { useContext } from 'react'
import { dataSharingPoint } from './Context'

function Mute() {
    const { setMute, mute } = useContext(dataSharingPoint)
   
  return (
      <div className='lg:ml-[95%] ml-[88%]'>
          <button className='fixed mt-5 z-30' onClick={() => setMute(!mute)} >
              {mute && <img className='h-5 w-5 absolute' src="close.png" alt="cross" />}
              <img className='h-5 w-5  ' src="sound.png" alt="" />
          </button>
    </div>
  )
}

export default Mute