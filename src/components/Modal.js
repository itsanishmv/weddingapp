import React, { useContext, useEffect, useRef, useState } from "react";
import { dataSharingPoint } from "./Context";
import { db } from "./firebase";
import { collection, addDoc,serverTimestamp } from "firebase/firestore";
import Confetti from "react-confetti";
import SuccessMsg from "./SuccessMsg";



function Modal() {
  const [name, setName] = useState();
  const [count, setCount] = useState();
  const [phone, setPhone] = useState();
  const [comments, setComments] = useState();
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);
  

 

  const {
    going,
    setGoing,
    showButtons,
    setShowButtons,
    setShowRsvp,
    successMsg,
    setSuccessMsg,
    notgoingMsg,
    setNotGoingMsg,
  } = useContext(dataSharingPoint);
  const ref = useRef(null);

  useEffect(() => {
    function outsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowRsvp(false);
      }
    }
    document.addEventListener("click", outsideClick);
  }, []);

  function handleBtn() {
    setGoing(true);
    setShowButtons(false);
  }
  function handleBtn2() {
    setGoing(false);
    setShowButtons(false);
  }
  function handleSubmitGoing(e) {
    setLoading(true);
    e.preventDefault();
    const col = collection(db, "going");
    addDoc(col, {
      name: name,
      count: count ?  Number(count) : 1,
      // phone: phone,
      comment: comments ? comments : false,
      timestamp: serverTimestamp(),
      createdAT : Date.now()
    }).then(() => {
      setLoading(false);
      setTimeout(() => {
        setShowRsvp(false);
        setSuccessMsg(false);
      }, 3500);
      setSuccessMsg(true);
      setShowConfetti(true);
    });
  }
  function handleSubmitNotGoing(e) {
    setLoading(true);
    e.preventDefault();
    const col = collection(db, "notGoing");
    addDoc(col, {
      name: name,
      count: count ? Number(count) : 1,
      // phone: phone,
      comment: comments ? comments : false,
      timestamp: serverTimestamp(),
      createdAT : Date.now()
    }).then(() => {
      setLoading(false);
      setTimeout(() => {
        setShowRsvp(false);
        setNotGoingMsg(false);
      }, 2000);

      setNotGoingMsg(true);
    });
  }

  const disabledbutton = !name || !count;
  return (
    <div className=" h-screen fixed lg:w-[50%] w-[100%]  bg-black-opacity-50 flex justify-center items-center z-30">
      <div
        ref={ref}
        className=" w-[90%] rounded-lg h-80  flex justify-center shadow-2xl bg-white opacity-100 py-5"
      >
        {showButtons && (
          <div ref={ref} className="flex flex-col justify-evenly">
            <button
              className=" p-5 rounded bg-green-400 text-white shadow-lg  font-bold text-xl"
              onClick={() => handleBtn()}
            >
              Going
            </button>
            <button
              className=" ring-white p-5 rounded bg-slate-100 text-lg shadow-lg font-medium  "
              onClick={() => handleBtn2()}
            >
              Not going
             
            </button>
          </div>
        )}
        {successMsg && !showButtons && (
          <div className="flex items-center">
            <Confetti
              run={showConfetti}
              recycle={false}
              width={700}
              height={500}
            />

            <SuccessMsg />
          </div>
        )}
        {notgoingMsg && !showButtons && <SuccessMsg notgoing={true} />}
        {(going || !going) && !showButtons && !successMsg && !notgoingMsg && (
          <>
            <form className="flex flex-col justify-evenly">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="text"
                placeholder="name"
              />

              {/* <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="number"
                placeholder="contact"
              /> */}
              <select
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400 bg-white"
                name="select no of persons"
                placeholder="hehehe"
              >
                <option  disabled selected >  number of members</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>

              </select>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="comments"
                placeholder="leave a message ... (optional)"
              />
              <div className="flex justify-between mt-4">
                {!going && !showButtons && (
                  <button
                    disabled={disabledbutton}
                    onClick={(e) => handleSubmitNotGoing(e)}
                    className={
                      disabledbutton
                        ? "bg-gray-300 text-white rounded p-2"
                        : "bg-[#f73d3de7] text-white rounded p-2"
                    }
                  >
                    {loading ? (
                      <img className="h-6 w-12" src="loading.svg" alt="asd" />
                    ) : (
                      "I'm out"
                    )}
                  </button>
                )}
                {going && !showButtons && (
                  <button
                    disabled={disabledbutton}
                    onClick={(e) => handleSubmitGoing(e)}
                    className={
                      disabledbutton
                        ? "bg-gray-300 text-white rounded p-2"
                        : `bg-blue-400 text-white rounded p-2`
                    }
                  >
                    {loading ? (
                      <img className="h-6 w-16" src="loading.svg" alt="asd" />
                    ) : (
                      "Count me"
                    )}
                  </button>
                )}

                <button
                  className="bg-gray-200 rounded p-2"
                  onClick={() => setShowRsvp(false)}
                >
                  {" "}
                  cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
