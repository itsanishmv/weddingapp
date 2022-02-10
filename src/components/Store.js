import React, { useState } from "react";

import { dataSharingPoint } from "./Context";

function Store({ children }) {
 
  const [showRsvp, setShowRsvp] = useState(false);
  const [going, setGoing] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  const [music, setMusic] = useState(false)
  const [start , setStart] = useState(false)
  return (
    <dataSharingPoint.Provider value={{start , setStart,music , setMusic,going , setGoing, showRsvp, setShowRsvp,showButtons , setShowButtons}}>
      {children}
    </dataSharingPoint.Provider>
  );
}

export default Store;
