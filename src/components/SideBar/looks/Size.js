import React, { useState } from "react";
import { connect } from "react-redux";

const Size = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 2,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
    <div
      className="text-center rounded bg-purple-500 p-2 my-3"
      id={comp_id}
      onClick={() => changeSize()}
    >
      <div className="grid grid-cols-2 my-2">
        <div className="text-white">Change Size by</div>
        <input
          className="w-10 mx-2 p-1 py-0 text-center"
          type="number"
          value={state.scale}
          onChange={(e) =>
            setState({ ...state, scale: parseInt(e.target.value) })
          }
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

export default connect(mapStateToProps)(Size);
