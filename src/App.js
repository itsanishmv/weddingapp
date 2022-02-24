
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import React,{ useContext} from 'react';
import { dataSharingPoint } from './components/Context';
import { useEffect} from 'react';
import Contact from './components/Contact';
import WelcomePage from './components/WelcomePage';
import Mute from './components/Mute';
import Music from './components/Music';

function App() {
 
  const { showContact, setShowArrow, open,videoEnded } = useContext(dataSharingPoint)

  useEffect(() => {
    let timer
    if (open && videoEnded) {
       timer = setTimeout(() => {
        window.scroll({
          top: 600,
          behavior: "smooth",
        });
        setShowArrow(true)
      },500)
    }

    return () => {
  clearTimeout(timer) 
}
  }, [videoEnded]);

  useEffect(() => {
    if (open ) {
      autoAudioPlayBack()
    }
    function autoAudioPlayBack() {
      
      const Audio = document.querySelector('audio')
      Audio.autoplay = true
      
      Audio.load()
    }
  }, [open])
    
    

  return (
    <div>
     
      {!open && < WelcomePage />}
      {open &&
        <div className=" lg:ml-[25%] scrollbar-none  items-center overflow-y-scroll  w-[100%] sm:w-[100%] shadow-black shadow-md lg:w-[50%]">
          <Music/>
          <div className=''>
          <Mute/>
         </div>
       
          <div className=''>
            <Homepage />
          </ div>
        
          <div  className='flex justify-center  fixed top-[50%] '>
            {showContact && <Contact />}
          </div>
        
         {videoEnded && <Navbar/>}
        </div>
      }
    </div>
      
  )
}

export default App;
