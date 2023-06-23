import React, { useState } from "react";
import { connect } from "react-redux";
import { setRepeat } from "../../../redux/events/eventActions";

const Repeat = ({ comp_id, events, set_repeat }) => {
  console.log("Events in Repeat", events);
  const [repeat, setStateRepeat] = useState(0);

  // Set Repeat value for current component
  function handleChange(e) {
    let val = parseInt(e.target.value);
    setStateRepeat(val);
    let curr = events.repeat;
    curr[comp_id] = val;
    set_repeat(curr);
  }
  return (
    // Repeat Component

    <div className="rounded text-center bg-green-500 p-2 my-3">
      <div className="flex flex-row my-2">
        <div className="text-white">Repeat</div>
        <input
          className="w-20 mx-2 p-1 py-0 text-center"
          type="number"
          value={repeat}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

// map state to component
const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

// map function to component
const mapDispatchToProps = (dispatch) => {
  return {
    set_repeat: (value) => dispatch(setRepeat(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repeat);
