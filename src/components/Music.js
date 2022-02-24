import React, { useContext, useEffect, useRef } from "react";
import { dataSharingPoint } from "./Context";

function Music() {
  const ref = useRef();
  const { setMusic, start,open ,mute , setMute } = useContext(dataSharingPoint);
  useEffect(() => {
    function outsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setMusic(false);
      }
    }
    document.addEventListener("click", outsideClick);
   
  }, []);
  useEffect(() => {
    if (mute) {
      const Audio = document.querySelector('audio')
      Audio.muted = true
     } else {
      const Audio = document.querySelector('audio')
      Audio.muted = false
     }
    console.log(mute)
  },[mute])
 
  return (

    <div ref={ref} className="flex ">
     
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/fvL7kDQsPeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <audio className="audio" src="audio.mp3" ></audio>
    </div>

  );
}

export default Music;
