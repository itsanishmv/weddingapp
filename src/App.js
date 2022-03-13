import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import React, { useContext, useState } from "react";
import { dataSharingPoint } from "./components/Context";
import { useEffect } from "react";
import Contact from "./components/Contact";
import WelcomePage from "./components/WelcomePage";
import Mute from "./components/Mute";
import Music from "./components/Music";

function App() {
  const { showContact, setShowArrow, open, videoEnded,videoload } =
    useContext(dataSharingPoint);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    let timer;
    if (open && videoEnded) {
      timer = setTimeout(() => {
        window.scroll({
          top: 600,
          behavior: "smooth",
        });
        setShowArrow(true);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [videoEnded]);

  useEffect(() => {
    if (open) {
      autoAudioPlayBack();
    }
    function autoAudioPlayBack() {
      const Audio = document.querySelector("audio");
      Audio.autoplay = videoload;
      Audio.load();
    }
  }, [open  ,videoload]);
  // document.addEventListener("contextmenu", (event) => event.preventDefault());

  window.addEventListener("scroll", () => {
    if (window.scrollY > 298) {
      setBool(true);
    }
  });

  return (
    <div id="main">
      {!open && <WelcomePage />}
      {open && (
        <div className=" lg:ml-[25%] scrollbar-none  items-center overflow-y-scroll  w-[100%] sm:w-[100%] shadow-black shadow-md lg:w-[50%]">
           <Music />
          <div className="">
            <Mute />
          </div>

          <div className="">
            <Homepage />
          </div>

          <div className="flex justify-center  fixed top-[50%] ">
            {showContact && <Contact />}
          </div>

          {/* {videoEnded && <Navbar />} */}
          {(bool || videoEnded) && <Navbar />}
        </div>
      )}
    </div>
  );
}

export default App;
