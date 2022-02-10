import React, { useContext, useEffect, useRef, useState } from "react";
import { dataSharingPoint } from "./Context";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function Modal() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [comments, setComments] = useState();
  const [activeBtn, setActiveBtn] = useState(false);

  const { going, setGoing, showButtons, setShowButtons, setShowRsvp } =
    useContext(dataSharingPoint);
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
    e.preventDefault();
    const col = collection(db, "going");
    addDoc(col, {
      name: name,
      email: email,
      phone: phone,
      comment: comments,
    });
    setName("");
    setEmail("");
    setPhone("");
  }
  function handleSubmitNotGoing(e) {
    e.preventDefault();
    const col = collection(db, "not going");
    addDoc(col, {
      name: name,
      email: email,
      phone: phone,
    });
    setName("");
    setEmail("");
    setPhone("");
  }
  const disabledbutton = !name || !email || !phone;
  return (
    <div className=" h-screen fixed lg:w-[50%] w-[100%]  bg-black-opacity-50 flex justify-center items-center">
      <div
        ref={ref}
        className=" w-[90%] rounded-lg h-80  flex justify-center shadow-2xl bg-white opacity-100 py-5"
      >
        {showButtons && (
          <div ref={ref} className="flex flex-col justify-evenly">
            <button
              className=" p-5 rounded bg-green-400 text-white  font-bold text-xl"
              onClick={() => handleBtn()}
            >
              Going
            </button>
            <button
              className="ring-2 ring-white p-5 rounded bg-slate-100 text-lg   "
              onClick={() => handleBtn2()}
            >
              Not Going
            </button>
          </div>
        )}

        {(going || !going) && !showButtons && (
          <>
            <form className="flex flex-col justify-evenly" action="">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="text"
                placeholder="name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="email"
                placeholder="email"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="number"
                placeholder="contact"
              />
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-{100%] p-2 rounded-md outline-none border-b focus:border-gray-400"
                type="comments"
                placeholder="leave a message ..."
              />
              <div className="flex justify-between mt-4">
                {!going && !showButtons && (
                  <button
                    disabled={disabledbutton}
                    onClick={(e) => handleSubmitNotGoing(e)}
                    className="bg-[#F70000] text-white rounded p-2"
                  >
                    I'm out
                  </button>
                )}
                {going && !showButtons && (
                  <button
                    disabled={disabledbutton}
                    onClick={(e) => handleSubmitGoing(e)}
                    className="bg-blue-400 text-white rounded p-2"
                  >
                    Count me
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
