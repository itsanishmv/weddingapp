import React, { useContext } from "react";
import { dataSharingPoint } from "./Context";

function Navbar() {
  const {
    setShowRsvp,
    setShowButtons,
    setShowContact,
    setShowArrow,
    showArrow,
  } = useContext(dataSharingPoint);

  function handleOnclick() {
    setShowRsvp(true);
    setShowButtons(true);
    setShowArrow(false);
  }

  function handleContact() {
    setShowContact(true);
  }

  return (
    <div className="lg:w-[50%] bg-[#252425] rounded-sm flex fixed w-[100%] bottom-0  px-4 py-2 justify-between">
      <button
        onClick={handleContact}
        className="flex flex-col items-center tap"
      >
        <img className="h-6 " src="telephone.png" alt="contact" />
        <span className="text-xs text-white ">Contact</span>
      </button>
      <button className="flex flex-col items-center">
        <a
          className="flex flex-col items-center"
          href="https://goo.gl/maps/RG6xmskn3zUj6TDR9"
        >
          <img className="h-6 transition-opacity " src="map.png" alt="map" />
          <span className="text-xs text-white">Location</span>
        </a>
      </button>
      <button onClick={handleOnclick} className="flex flex-col items-center">
        {showArrow && (
          <img
            className="absolute -top-2 h-20  text-white "
            src="ripple.svg"
            alt="alt"
          />
        )}
        <img className={"h-6 "} src="email.png" alt="invite" />
        <span className="text-xs text-white ">Rsvp</span>
      </button>

      <button className="flex flex-col items-center">
        <img className=" h-6 " src="youtube-live.svg" alt="play" />
        <span className="text-xs text-white">Live</span>
      </button>

      <button>
        <a
          className="flex flex-col items-center"
          // target="_blank"
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Shyamili+%26+Vineeth%27s+wedding+day+%F0%9F%8E%89&details=Hey+beautiful+people+%E2%9C%A8+you+all+are+cordially+invited+to+Shyamili+and+vineeth%27s+wedding+ceremony+.&location=Madayi+Cooperative+Rural+Bank+Auditorium%2C+Pazhayangadi+-+Payyannur+Road%2C+27M8%2B876%2C+Ezhome%2C+Kerala+670334%2C+India&dates=20221120T043000Z%2F20221120T063000Z"
        >
          <img className="h-6  " src="planner.png" alt="calender" />

          <div className="text-xs text-white">Calender</div>
        </a>
      </button>
    </div>
  );
}

export default Navbar;
