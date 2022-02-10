import React, { useContext } from "react";
import { dataSharingPoint } from "./Context";

function Navbar() {
  const { setShowRsvp, setShowButtons, setMusic } =
    useContext(dataSharingPoint);
  // console.log(showRsvp);
  function handleOnclick() {
    setShowRsvp(true);
    setShowButtons(true);
  }
  function handleMusic() {
    setMusic(true);
  }

  return (
    <div className="lg:w-[50%] flex fixed w-[100%] bottom-0.5 bg-slate-300 border-2 px-4 py-1 justify-between">
      <button onClick={handleOnclick} className="flex flex-col items-center">
        <img className="h-6 " src="invite.png" alt="invite" />
        <span>rsvp</span>
      </button>
      <button className="flex flex-col items-center">
        <a
          className="flex flex-col items-center"
          href="https://goo.gl/maps/t2keBi1aWgMi7ewB7"
        >
          <img className="h-6 " src="placeholder.png" alt="map" />
          <span>map</span>
        </a>
      </button>
      <button className="flex flex-col items-center">
        <img className="h-6 " src="phone-call.png" alt="contact" />
        <span>contact</span>
      </button>
      <button onClick={handleMusic} className="flex flex-col items-center">
        <img className=" h-6 " src="play.png" alt="play" />
        <span>music</span>
      </button>
      {/* {music && (
        <Music />
        // <YouTube videoId="wya5utKP_Po" opts={opts} />
      )} */}

      <button>
        <a
          className="flex flex-col items-center"
          target="_blank"
          rel="noreferrer"
          href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M3YxbjQyOHVnOTI1ZXQydjIwcDhiMmpoOHIgYWFuaXNobXZAbQ&amp;tmsrc=aanishmv%40gmail.com"
        >
          <img className="h-6  " src="calendar.png" alt="calender" />

          <div>calender</div>
        </a>
      </button>
    </div>
  );
}

export default Navbar;
