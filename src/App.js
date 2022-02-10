
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import React,{ useContext } from 'react';
import { dataSharingPoint } from './components/Context';

import { useEffect} from 'react';
function App() {
  const { setStart} = useContext(dataSharingPoint)
  
  useEffect(() => {
    setStart(true)
  },[])
  return (
    <div className=" lg:ml-[25%] scrollbar-none  items-center overflow-y-scroll h-screen w-[100%] sm:w-[100%] shadow-black shadow-md lg:w-[50%] ">
      <div className='h-screen '>
         <Homepage />
      </div>
      {/* {start &&<Music/>} */}
      
      <Navbar />
    </div>
  )
}

export default App;
