import React, { useState } from "react";
import { connect } from "react-redux";

const ThinkMessage = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: "Hmmm...",
    character_id: "",
  });
  /* Display Think Message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";

    el2.style.display = "block";
    el2.style.position = "relative";

    window.clearTimeout();
    el.innerHTML = state.message;
  };

  return (
    <div
      className="rounded text-center bg-purple-500 p-2 my-3"
      id={comp_id}
      onClick={() => displayMessage()}
    >
      <div className="flex flex-row my-2">
        <div className="text-white">Think</div>
        <input
          className="w-20 mx-2 p-1 py-0 text-center"
          type="text"
          value={state.message}
          onChange={(e) => {
            e.target.value.length > 0 &&
              setState({ ...state, message: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(ThinkMessage);
