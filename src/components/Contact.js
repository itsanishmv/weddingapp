import React, { useContext, useEffect, useRef } from "react";
import { dataSharingPoint } from "./Context";

function Contact() {
  const { showContact, setShowContact } = useContext(dataSharingPoint);
  const ref = useRef(null);

  useEffect(() => {
    function outsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowContact(false);
      }
    }
    document.addEventListener("click", outsideClick);
  }, []);

  return (
    <div
      ref={ref}
      className=" h-20 w-80  shadow-2xl flex justify-evenly items-center bg-white rounded-lg   "
    >
      <div className="flex flex-col text-xl font-bold ">
        <h1>Shyam</h1>
        {/* <span>
                9526170074
            </span> */}
      </div>

      <div className="flex justify-between">
        <a href="tel:9526170074">
          <img className="h-7 w-7" src="telephone.png" alt="" />
        </a>
        <a href="https://wa.me/+919526170074">
          <img className="h-7 w-7 ml-[50%]" src="whatsapp.png" alt="img" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
