import React, { useContext } from "react";
import { dataSharingPoint } from "./Context";


function Navbar() {
  const { setShowRsvp, setShowButtons, setShowContact ,setShowArrow,showArrow } =
    useContext(dataSharingPoint);

  function handleOnclick() {
    setShowRsvp(true);
    setShowButtons(true);
    setShowArrow(false)
  }

  function handleContact() {
    setShowContact(true);   
  }

  return (
    <div className="lg:w-[50%] bg-[#252425] rounded-sm flex fixed w-[100%] bottom-0  px-4 py-2 justify-between">
    
      <button onClick={handleContact} className="flex flex-col items-center tap">
        <img className="h-6 " src="telephone.png" alt="contact" />
        <span className="text-xs text-white ">Contact</span>
      </button>
      <button className="flex flex-col items-center">
        <a
          className="flex flex-col items-center"
          href="https://goo.gl/maps/t2keBi1aWgMi7ewB7"
        >
          <img className="h-6 transition-opacity " src="map.png" alt="map" />
          <span className="text-xs text-white">Location</span>
        </a>
      </button>
      <button onClick={handleOnclick} className="flex flex-col items-center">
        {showArrow && <img className="fixed h-20 mt-[-20px] text-white " src="ripple.svg" alt="alt" />}
        <img className={"h-6 "} src="email.png" alt="invite" />
        <span className="text-xs text-white ">Rsvp</span>
      </button>
    
      <button  className="flex flex-col items-center">
        <img className=" h-6 " src="youtube-live.svg" alt="play" />
        <span className="text-xs text-white" >Live</span>
      </button>
     

      <button>
     
        <a className="flex flex-col items-center" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=vandana+and+Sujith%27s+wedding+day&location=Uttara+Guruvayurappan+Temple%2C+Temple+Complex%2C+Sahakarita+Marg%2C+Pocket+3%2C+Mayur+Vihar%2C+New+Delhi%2C+Delhi+110091%2C+India&dates=20220417T050000Z%2F20220417T060000Z">

          <img className="h-6  " src="planner.png" alt="calender" />

          <div className="text-xs text-white">Calender</div>
 
        </a>
      </button>
    </div>
  );
}

export default Navbar;
