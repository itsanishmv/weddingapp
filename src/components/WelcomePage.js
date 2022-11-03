import React, { useContext } from "react";
import { dataSharingPoint } from "./Context";

function WelcomePage() {
  const { setOpen } = useContext(dataSharingPoint);
  function handleOpen() {
    setOpen(true);
  }
  return (
    <div className="flex flex-col justify-center items-center border-2 h-screen w-screen ">
      <img
        className="shadow-[0px_20px_30px_-10px_rgb(38,57,77)]  h-1/2 object-cover rounded-3xl  "
        src="card1.jpg"
        alt="entrypage"
      />
      <buttom
        className="bg-[#9B1D3A] text-white mt-10  rounded p-3 items-center w-16 font-bold cursor-pointer shadow-2xl"
        onClick={handleOpen}
      >
        Open
      </buttom>
    </div>
  );
}

export default WelcomePage;
