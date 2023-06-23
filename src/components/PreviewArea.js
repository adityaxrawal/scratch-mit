import React from "react";
import Sprite from "./Sprite";
import { connect } from "react-redux";

function PreviewArea({ character }) {
  console.log("Charactertrsydtufh", character.characters);
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  let elmnt = null;

  function dragMouseDown(e, id) {
    elmnt = document.getElementById(id);

    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
  return (
    <div
      className="w-full flex-none h-full overflow-y-auto p-3"
      id="preview_area"
    >
      <div className="flex justify-around h-full">
        <div
          id={`sprite`}
          className={`absolute`}
          onMouseDown={(e) => dragMouseDown(e, `sprite`)}
        >
          <div id={`sprite-div`} className="character">
            <div
              className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
              id={"sprite" + "-message-box"}
            ></div>
            <div
              className="hidden rounded-full border-2 w-4 left-1/2 h-4 ml-3 mb-2 whitespace-nowrap"
              id={"sprite" + "-message-box1"}
            ></div>
            <Sprite />
          </div>
        </div>
      </div>
    </div>
  );
}

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(PreviewArea);
