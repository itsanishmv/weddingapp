import React, { useContext, useEffect, useState } from "react";
import { dataSharingPoint } from "./Context";
import Modal from "./Modal";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Music from "./Music";
import Avatar from "react-avatar";

function Homepage() {
  const { showRsvp, music, successMsg, notgoingMsg, setVideoEnded } =
    useContext(dataSharingPoint);
  const [goingCount, setGoingCount] = useState([]);
  const [notGoing, setNotgoing] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const getCol = collection(db, "going");
    const getcol2 = collection(db, "not going");
    function getData() {
      getDocs(getCol).then((snapshot) => {
        setGoingCount(snapshot.docs.map((data) => data.data()));
      });
      getDocs(getcol2).then((snapshot) => {
        setNotgoing(snapshot.docs.map((data) => data.data()));
      });
    }

    getData();
  }, [successMsg, notgoingMsg]);

  function startScrolling(fn, delay) {
    let timer;
    let timer2;
    return function () {
      clearTimeout(timer);
      clearInterval(timer2);
      timer = setTimeout(() => {
        timer2 = setInterval(() => {
          fn();
        }, 500);
      }, delay);
    };
  }
  function autoscroll() {
    console.log("scrolling");
    const commentBox = document.getElementById("scroll");
    commentBox.scrollBy({
      top: 20,
      behavior: "smooth",
    });
  }
  const debounce = startScrolling(autoscroll, 3000);

  return (
    <div>
      {music && <Music />}
      {showRsvp && (
        <div className={("h-screen", showRsvp && "bg-black")}>
          <Modal />
        </div>
      )}

      <div className=" bg-[#252425] flex items-center justify-center h-screen ">
        <video
          disableRemotePlayback
          onEnded={() => setVideoEnded(true)}
          autoPlay
          id="video"
          src="compressed.mp4"
          className=" h-full border-white "
        ></video>
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="text-center font-cursive text-medium">
          We request the honor of your presence at the marriage of our children
        </h1>
        <p className="text-2xl font-cursive border-2 p-3 rounded shadow-lg font-extrabold">
          Vandana & Sujith
        </p>
      </div>
      <div className="mt-[50px] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-cursive text-lg">Venue</h1>
          <h1>Guruvayoor temple , Mayur Vihar Phase-1 , Delhi </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-cursive text-lg">Timing</h1>
          <h1>12:00 p.m</h1>
        </div>
        <div></div>
      </div>
      <div className="flex mt-[50px] flex-col ">
        <h1 className="flex justify-center font-cursive text-2xl">
          Attendance
        </h1>
        <div className="flex justify-evenly  font-serif mt-[20px] ">
          <h1 className="font-normal flex flex-col  items-center">
            <h1 className="font-bold text-4xl">{goingCount?.length}</h1> Going
          </h1>

          <h1 className="font-normal flex flex-col  items-center">
            <h1 className="font-bold text-4xl">{notGoing?.length}</h1> Not going
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="flex items-center font-cursive justify-center text-2xl mb-10 ">
        Wishes
      </h1>
      <div
        id="scroll"
        className="flex flex-col items-center h-80  overflow-y-scroll  "
        onTouchMove={debounce}
      >
        {goingCount.concat(notGoing).map((items) => (
          <>
            {items.comment && (
              <div className="flex mt-2 bg-white p-2 shadow-xl w-[300px] ring-lime-300 ">
                <Avatar
                  name={items.name}
                  round={true}
                  size={50}
                  style={{ Color: "black" }}
                />
                <div className="flex flex-col ml-3 w-[200px] ">
                  <h1 className="font-bold capitalize  ">{items.name}</h1>

                  <p className="italic  break-words">{items.comment}</p>
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
