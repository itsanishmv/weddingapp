import React from "react";

function SuccessMsg({ notgoing }) {
  return (
    <div className="flex items-center">
      {notgoing ? (
        <h1 className="text-lg font-semibold text-center">
          we completely understand your situation 😉
        </h1>
      ) : (
        <h1 className="text-lg font-semibold">
          You've been Successfully added🎉{" "}
        </h1>
      )}
    </div>
  );
}

export default SuccessMsg;
