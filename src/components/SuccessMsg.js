import React from "react";

function SuccessMsg({ notgoing }) {
  return (
    <div className="flex items-center">
      {notgoing ? (
        <h1 className="text-lg font-semibold text-center">
          We completely understand your situation ð
        </h1>
      ) : (
        <h1 className="text-sm font-semibold">
          Thank you, we are looking forward to host youð
        </h1>
      )}
    </div>
  );
}

export default SuccessMsg;
