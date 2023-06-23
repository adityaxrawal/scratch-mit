import React, { useState } from "react";

const BroadcastMessage = ({ comp_id }) => {
  const [state, setState] = useState({
    message: "Hello!",
  });

  const [showSnackbar, setShowSnackbar] = useState(false);

  /* Display Snackbar */
  const handleClick = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
    // enqueueSnackbar(state.message, { variant: "info" });
  };

  return (
    <>
      <div
        className="rounded text-center bg-yellow-500 p-2 my-3"
        id={comp_id}
        onClick={() => handleClick()}
      >
        <div className="flex flex-row my-2">
          <div className="text-white">Broadcast message</div>
          <input
            className="w-20 mx-2 p-1 py-0 text-center"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ message: e.target.value });
            }}
          />
        </div>
        {showSnackbar && (
          <div className="absolute bottom-0 left-0 mb-4 mx-4 p-4 bg-gray-600 text-white rounded shadow">
            {state.message}
          </div>
        )}
      </div>
    </>
  );
};

export default BroadcastMessage;
