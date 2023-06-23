import React, { useState } from "react";
import { connect } from "react-redux";
import { setWait } from "../../../redux/events/eventActions";

const Wait = ({ events, comp_id, set_wait }) => {
  const [wait, setStateWait] = useState(0);

  // Set Wait value for current component
  function handleChange(e) {
    let val = parseInt(e.target.value);
    setStateWait(val);
    let curr = events.wait;
    curr[comp_id] = val;
    set_wait(curr);
  }
  return (
    // Wait Component
    <div className=" text-center rounded bg-green-500 p-2 my-3">
      <div className="flex flex-row my-2">
        <div className="text-white">Wait</div>
        <input
          className="w-20 mx-2 p-1 py-0 text-center"
          type="number"
          value={wait}
          onChange={(e) => handleChange(e)}
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
    set_wait: (value) => dispatch(setWait(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait);
