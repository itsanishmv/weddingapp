import React, { useContext, useEffect, useState } from "react";
import { dataSharingPoint } from "./Context";
import Modal from "./Modal";
import { db } from "./firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Avatar from "react-avatar";
import { formatDistance } from "date-fns";

function Homepage() {
  const {
    showRsvp,
    music,
    successMsg,
    notgoingMsg,
    setVideoEnded,
    videoload,
    setVideoLoad,
  } = useContext(dataSharingPoint);
  const [goingCount, setGoingCount] = useState([]);
  const [notGoing, setNotgoing] = useState([]);
  const [countMember, setCountMember] = useState(false);

  useEffect(() => {
    const getCol = collection(db, "going");
    const getcol2 = collection(db, "notGoing");
    const q1 = query(getCol, orderBy("timestamp", "desc"));
    const q2 = query(getcol2, orderBy("timestamp", "desc"));

    function getData() {
      getDocs(q1).then((snapshot) => {
        setGoingCount(snapshot.docs.map((data) => data.data()));
      });
      getDocs(q2).then((snapshot) => {
        setNotgoing(snapshot.docs.map((data) => data.data()));
      });
    }

    getData();
  }, [successMsg, notgoingMsg]);

  const GoingMemberCount = goingCount.reduce(
    (acc, curr) => curr.count + acc,
    0
  );

  // function startScrolling(fn, delay) {
  //   let timer;
  //   let timer2;
  //   return function () {
  //     clearTimeout(timer);
  //     clearInterval(timer2);
  //     timer = setTimeout(() => {
  //       timer2 = setInterval(() => {
  //         fn();
  //       }, 600);
  //     }, delay);
  //   };
  // }
  // function autoscroll() {
  //   console.log("scrolling");
  //   const commentBox = document.getElementById("scroll");
  //   commentBox.scrollBy({
  //     top: 20,
  //     behavior: "smooth",
  //   });
  // }
  // const debounce = startScrolling(autoscroll, 3000);
  // console.log(cyclicArray)

  function handleVideoLoad() {
    setVideoLoad(true);
  }

  return (
    <div>
      {showRsvp && (
        <div className={("h-screen", showRsvp && "bg-black")}>
          <Modal />
        </div>
      )}

      <div className=" flex items-center justify-center bg-[#262526] h-screen ">
        {!videoload && (
          <div className="flex items-center justify-center flex-col z-30 ">
            <img src="videoload.svg" alt="" />
            <p className="text-white -mt-10 ">Loading...</p>
          </div>
        )}
        <video
          className={`${videoload ? "flex" : "hidden"}`}
          onPlay={handleVideoLoad}
          preload="none"
          disableRemotePlayback
          onEnded={() => setVideoEnded(true)}
          autoPlay
          id="video"
          src="compressed-v2.mp4"
          type="video/mp4"
        ></video>
      </div>
      <div className="border-2 border-[#262526]">
        <img className=" -mt-24" src="invitation 05.jpg" alt="invite" />
      </div>
      <h1 className=" text-red-500 flex animate-bounce mt-5 font-bold justify-center">
        (Please Rsvp by clicking the RSVP icon below)
      </h1>
      <div className="flex mt-[50px] flex-col ">
        <h1 className="flex justify-center font-cursive text-4xl">
          Attendance
        </h1>
        <div className="flex justify-evenly  font-serif mt-[20px] ">
          <h1 className="font-normal flex flex-col justify-center items-center">
            <h1 className="font-bold font-fantasy text-4xl">
              {GoingMemberCount}
            </h1>{" "}
            Going
          </h1>
          {/* <img className="  h-56 absolute" src="webGif.gif" alt="" />
          <img className=" h-45 absolute" src="webGif.gif" alt="" /> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        className="-z-10  absolute h-96  flex ml-10 "
        src="webGif.gif"
        alt=""
      />
      <img
        className="-z-10  absolute h-96  flex ml-10 "
        src="webGif.gif"
        alt=""
      />

      <h1 className="flex items-center font-cursive justify-center text-4xl mb-10  ">
        Wishes
      </h1>

      <div
        id="scroll"
        className="flex flex-col items-center h-80 overflow-y-scroll  "
      >
        {goingCount.concat(notGoing).map((items) => (
          <>
            {items.comment && (
              <div
                className={
                  formatDistance(items.createdAT, new Date()) ===
                  "less than a minute"
                    ? "animate-animateColor flex mt-2 p-2 shadow-xl w-[300px]"
                    : "  flex mt-2 bg-white p-2 shadow-xl w-[300px] ring-lime-300 "
                }
              >
                <Avatar
                  name={items.name}
                  round={true}
                  size={50}
                  style={{ Color: "black" }}
                />
                <div className="flex flex-col ml-3 w-[200px] ">
                  <h1 className="font-bold capitalize">{items.name}</h1>
                  <p className="italic  break-words">{items.comment}</p>
                  <p className="text-xs mt-1">
                    {formatDistance(items.createdAT, new Date())} ago
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-white flex flex-col items-center justify-center h-20 text-sm font-bold bg-[#470c18]">
        <h1>Developed with ❤ by Anish</h1>
        <h1 className="mt-1">Email - aanishmv@gmail.com</h1>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Homepage;
