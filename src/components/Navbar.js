import React, { useContext } from "react";
import { dataSharingPoint } from "./Context";
import Music from './Music'

function Navbar() {
  const { setShowRsvp, setShowButtons, setMusic, setShowContact ,setShowArrow,showArrow ,music} =
    useContext(dataSharingPoint);

  function handleOnclick() {
    setShowRsvp(true);
    setShowButtons(true);
    setShowArrow(false)
  }
  // function handleMusic() {
  //   setMusic(true);
  // }
  function handleContact() {
    setShowContact(true);   //#0B2239
  }

  return (
    <div className="lg:w-[50%] bg-[#252425]  flex fixed w-[100%] bottom-0  px-4 py-1 justify-between">
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=m6eriqinmlig1pgkap5toljqoo%40group.calendar.google.com&ctz=Asia%2FKolkata" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
      <button onClick={handleContact} className="flex flex-col items-center tap">
        <img className="h-6 " src="telephone.png" alt="contact" />
        <span className="text-sm text-white "> Mobile</span>
      </button>
      <button className="flex flex-col items-center">
        <a
          className="flex flex-col items-center"
          href="https://goo.gl/maps/t2keBi1aWgMi7ewB7"
        >
          <img className="h-6 " src="map.png" alt="map" />
          <span className="text-sm text-white">Map</span>
        </a>
      </button>
      <button onClick={handleOnclick} className="flex flex-col items-center">
        {showArrow && <img className="fixed h-20 mt-[-20px] text-white " src="ripple.svg" alt="alt" />}
        <img className={"h-6 "} src="email.png" alt="invite" />
        <span className="text-sm text-white ">Rsvp</span>
      </button>
    
      <button  className="flex flex-col items-center">
        <img className=" h-6 " src="youtube-live.svg" alt="play" />
        <span className="text-sm text-white" >Live</span>
      </button>
     

      <button>
     
        <a className="flex flex-col items-center" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=vandana+and+Sujith%27s+wedding+day&location=Uttara+Guruvayurappan+Temple%2C+Temple+Complex%2C+Sahakarita+Marg%2C+Pocket+3%2C+Mayur+Vihar%2C+New+Delhi%2C+Delhi+110091%2C+India&dates=20220417T050000Z%2F20220417T060000Z">

          <img className="h-6  " src="planner.png" alt="calender" />

          <div className="text-sm text-white">Calender</div>
 
        </a>
      </button>
    </div>
  );
}

export default Navbar;
