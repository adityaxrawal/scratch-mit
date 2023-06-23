import React, { useState } from "react";
import Icon from "../../Icon";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../../redux/character/actions";

const TurnAntiClockWise = ({ character, characterAngle, comp_id }) => {
  console.log("Anti", character);
  const [angle, setAngle] = useState(0);

  // handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters[0].angle;
    console.log("Angle Anti", character_angle);
    console.log("Selected angle ANti", anti_angle);
    el.style.transform = `rotate(${character_angle + anti_angle}deg)`;
    characterAngle(character_angle + anti_angle);
  };

  return (
    <div
      className="text-center rounded bg-blue-500 p-2 my-3"
      id={comp_id}
      onClick={() => handleClick()}
    >
      <div className="flex flex-row">
        <div className="text-white">Turn</div>
        <Icon name="undo" size={15} className="text-white mx-2" />
        <input
          className="w-10 mx-2 p-1 py-0 text-center"
          type="number"
          value={angle}
          onChange={(e) => {
            setAngle(parseInt(e.target.value));
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

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);
