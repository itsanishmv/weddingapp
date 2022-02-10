import React, { useContext, useEffect, useRef } from "react";
import { dataSharingPoint } from "./Context";

function Music() {
  const ref = useRef();
  const { setMusic, start } = useContext(dataSharingPoint);
  useEffect(() => {
    function outsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setMusic(false);
      }
    }
    document.addEventListener("click", outsideClick);
  }, []);
  return (
    <div ref={ref} className="flex ">
      {start && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wya5utKP_Po?start=20&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}

export default Music;
