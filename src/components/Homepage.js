import React, { useContext, useEffect, useState } from "react";
import { dataSharingPoint } from "./Context";
import Modal from "./Modal";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Music from "./Music";

function Homepage() {
  const { showRsvp, music } = useContext(dataSharingPoint);
  const [goingCount, setGoingCount] = useState([]);
  const [notGoing, setNotgoing] = useState([]);

  useEffect(() => {
    const getCol = collection(db, "going");
    const getcol2 = collection(db, "not going");
    getDocs(getCol).then((snapshot) => {
      setGoingCount(snapshot.docs.map((data) => data.data()));
    });
    getDocs(getcol2).then((snapshot) => {
      setNotgoing(snapshot.docs.map((data) => data.data()));
    });
  }, []);

  return (
    <div>
      {music && <Music />}
      {showRsvp && (
        <div className={("h-screen", showRsvp && "bg-black")}>
          <Modal />
        </div>
      )}
      <div>
        <img
          className="h-screen w-[100%] object-cover"
          src="weddingcard.jpg"
          alt="card"
        />
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
      <h1 className="flex items-center justify-center text-xl font-fantasy">
        Comments
      </h1>
      <div className="border-2 flex flex-col items-center h-80 overflow-y-scroll ">
        {goingCount.concat(notGoing).map((items) => (
          <>
            {items.comment && (
              <div className="flex flex-col mt-2">
                <span className="font-bold capitalize ">{items.name}</span>

                <span className=" w-72 italic ">{items.comment}</span>
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
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Homepage;
