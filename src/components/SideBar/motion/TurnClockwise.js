import React, { useState } from "react";
import { connect } from "react-redux";
import Icon from "../../Icon";
import { setCharacterAngle } from "../../../redux/character/actions";

const TurnClockWise = ({ character, characterAngle, comp_id }) => {
  console.log("Clock", character);
  const [angle, setAngle] = useState(0);

  // handle turn clockwise component
  const handleClick = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters[0].angle;
    console.log("Angle Clock", character_angle);
    console.log("Selected angle clock", angle);
    el.style.transform = `rotate(${character_angle + angle}deg)`;
    characterAngle(character_angle + angle);
  };

  return (
    <div
      className="text-center rounded bg-blue-500 p-2 my-3"
      id={comp_id}
      onClick={() => handleClick()}
    >
      <div className="flex flex-row">
        <div className="text-white">Turn</div>
        <Icon name="redo" size={15} className="text-white mx-2" />
        <input
          className="w-10 mx-2 p-1 py-0 text-center"
          type="number"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
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

export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise);
