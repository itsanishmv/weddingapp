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
    <div className="lg:w-[50%] bg-[#B58C57] rounded-sm flex fixed w-[100%] bottom-0  px-4 h-[75px] justify-between items-center ">
      <button
        onClick={handleContact}
        className="flex flex-col items-center tap"
      >
        <img className="h-6 font-bold" src="phone.svg" alt="contact" />
        <span className="text-xs text-white font-semibold">Contact</span>
      </button>
      <button className="flex flex-col items-center">
        <a
          className="flex flex-col items-center"
          href="https://goo.gl/maps/RG6xmskn3zUj6TDR9"
        >
          <img
            className="h-6 transition-opacity "
            src="location.svg"
            alt="map"
          />
          <span className="text-xs text-white font-semibold">Location</span>
        </a>
      </button>
      <button onClick={handleOnclick} className="flex flex-col items-center">
        {showArrow && (
          <img
            className="absolute -mt-6 h-20  text-white "
            src="ripple.svg"
            alt="alt"
          />
        )}
        <img className={"h-6 "} src="rsvp.svg" alt="invite" />
        <span className="text-xs text-white font-semibold ">Rsvp</span>
      </button>

      {/* <button className="flex flex-col items-center">
        <img className=" h-6 " src="youtube-live.svg" alt="play" />
        <span className="text-xs text-white">Live</span>
      </button> */}

      <button>
        <a
          className="flex flex-col items-center"
          // target="_blank"
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Shyamili+%26+Vineeth%27s+wedding+day+%F0%9F%8E%89&details=Hey+beautiful+people+%E2%9C%A8+you+all+are+cordially+invited+to+Shyamili+and+vineeth%27s+wedding+ceremony+.&location=Madayi+Cooperative+Rural+Bank+Auditorium%2C+Pazhayangadi+-+Payyannur+Road%2C+27M8%2B876%2C+Ezhome%2C+Kerala+670334%2C+India&dates=20221120T043000Z%2F20221120T063000Z"
        >
          <img className="h-6  " src="calender.svg" alt="calender" />

          <div className="text-xs text-white font-semibold">Calender</div>
        </a>
      </button>
    </div>
  );
}

export default Navbar;
