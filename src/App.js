
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import React,{ useContext } from 'react';
import { dataSharingPoint } from './components/Context';

import { useEffect} from 'react';
import Contact from './components/Contact';
function App() {
  const { setStart , showContact} = useContext(dataSharingPoint)
  
  useEffect(() => {
    setStart(true)
  },[])
  return (
    <div className=" lg:ml-[25%] scrollbar-none  items-center overflow-y-scroll h-screen w-[100%] sm:w-[100%] shadow-black shadow-md lg:w-[50%] ">
      <div className='h-screen '>
         <Homepage />
      </div>
      {/* {start &&<Music/>} */}
      <div className='flex justify-center fixed top-[50%] '>
      {showContact && <Contact/>}
      </div>
     
      <Navbar />
    </div>
  )
}

export default App;
