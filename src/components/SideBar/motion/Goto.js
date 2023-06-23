import React, { useState } from "react";
import { connect } from "react-redux";

const GotoXY = ({ character, comp_id }) => {
  const [state, setState] = useState({
    goto_x: 46,
    goto_y: 23,
  });

  // go to posiiton X and Y
  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    el.style.position = "relative";
    el.style.left = state.goto_x + "px";
    el.style.top = state.goto_y + "px";
  };
  return (
    <div
      className="flex flex-row text-center rounded bg-blue-500 p-2 my-3"
      id={comp_id}
      onClick={() => gotoXY()}
    >
      <div className="flex flex-row my-2">
      <div className="text-white">Go to&nbsp;</div>
        <div className="text-white">x:</div>
        <input
          className="w-10 mx-2 p-1 py-0 text-center"
          type="number"
          value={state.goto_x}
          onChange={(e) => {
            parseInt(e.target.value) !== 0 &&
              setState({ ...state, goto_x: parseInt(e.target.value) });
          }}
        />
      </div>
      <div className="flex flex-row my-2">
        <div className="text-white">y:</div>
        <input
          className="w-10 mx-2 p-1 py-0 text-center"
          type="number"
          value={state.goto_y}
          onChange={(e) => {
            parseInt(e.target.value) !== 0 &&
              setState({ ...state, goto_y: parseInt(e.target.value) });
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

export default connect(mapStateToProps)(GotoXY);
