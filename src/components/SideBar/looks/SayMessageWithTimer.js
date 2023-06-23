import React, { useState } from "react";
import { connect } from "react-redux";

const SayMessageWithTimer = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "Hello!",
    timer_for_msg: 2,
  });

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el2.style.display = "none";
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });

    el.style.display = "block";
    el.style.position = "relative";

    el.innerHTML = state.timer_message;
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <>
      <div
        className="flex flex-row rounded text-center bg-purple-500 p-2 my-3"
        id={comp_id}
        onClick={() => displayMessage()}
      >
        <div className="flex flex-row my-2">
          <div className="text-white">Say</div>
          <input
            className="w-20 mx-2 px-0 py-0 text-center"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              // e.target.value.length > 0 &&
              setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-row my-2">
          <div className="text-white">for</div>
          <input
            className="w-10 mx-2 px-0 py-0 text-center"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }}
          />
          <div className="text-white">seconds</div>
        </div>
      </div>
      {/* <div className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {`Say ${state.timer_message} for ${state.timer_for_msg} seconds`}
      </div> */}
    </>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(SayMessageWithTimer);
