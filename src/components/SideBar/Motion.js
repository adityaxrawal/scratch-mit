import React from "react";
import Icon from "../Icon";

function Motion({
  handleMove10Steps,
  handleTurn15DegreeUndo,
  handleTurn15DegreeRedo,
  handleSetYTo,
  handleChangeByX,
  handleChangeByY,
  handleGlideSecsToRandomPosition,
  handleGlideSecsXY,
  handleGoToRandomPosition,
  handleGoToXYPosition,
  handlePointInDirection,
  handlePointTowards,
  handleSetXTo,
}) {
  const handleDragStart = (event) => {
    // Set the data being dragged
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  return (
    <React.Fragment>
      <div className="font-bold"> {"Motion"} </div>
      <div
        id="move-10-steps"
        className="w-28 flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleMove10Steps}
      >
        {"Move 10 steps"}
      </div>
      <div
        id="turn-15-degrees-undo"
        className="w-36 flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleTurn15DegreeUndo}
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        id="turn-15-degrees-redo"
        className="w-36 flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleTurn15DegreeRedo}
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        id="go-to-random-position"
        className="w-44 flex flex-row w-60 flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleGoToRandomPosition}
      >
        {"go to"}
        <span className="flex flex-row w-auto bg-blue-600 whitespace-nowrap border border-solid border-blue-700 rounded-3xl px-4 items-center">
          Random Position
          <Icon name="angle-down" size={15} className="text-white mx-2" />
        </span>
      </div>
      <div
        id="go-to-x-y-position"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleGoToXYPosition}
      >
        {"go to x:"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          46
        </span>
        &nbsp;{"y:"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          25
        </span>
      </div>
      <div
        id="glide-secs-to-random-position"
        className="flex flex-row w-80 flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2 items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleGlideSecsToRandomPosition}
      >
        {"glide"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          1
        </span>
        {"secs to"}
        <span className="flex flex-row w-auto bg-blue-600 whitespace-nowrap border border-solid border-blue-700 rounded-3xl px-4 items-center">
          Random Position
          <Icon name="angle-down" size={15} className="text-white mx-2" />
        </span>
      </div>
      <div
        id="glide-secs-x-y"
        className="flex flex-row w-70 flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2 items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleGlideSecsXY}
      >
        {"glide"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          1
        </span>
        {"secs to x: "}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          46
        </span>
        &nbsp;{"y:"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          25
        </span>
      </div>
      <div
        id="point-in-direction"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handlePointInDirection}
      >
        {"point in direction"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          90
        </span>
      </div>
      <div
        id="point-towards"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handlePointTowards}
      >
        {"point towards"}&nbsp;
        <span className="flex flex-row w-auto bg-blue-600 whitespace-nowrap border border-solid border-blue-700 rounded-3xl px-4 items-center">
          mouse-pointer
          <Icon name="angle-down" size={15} className="text-white mx-2" />
        </span>
      </div>
      <div
        id="change-by-x"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleChangeByX}
      >
        {"change by x"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          10
        </span>
      </div>
      <div
        id="set-x-to"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleSetXTo}
      >
        {"set x to"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          46
        </span>
      </div>
      <div
        id="change-y-by"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleChangeByY}
      >
        {"change y by"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          10
        </span>
      </div>
      <div
        id="set-y-to"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={handleSetYTo}
      >
        {"set y to"}&nbsp;
        <span className="flex flex-row w-auto bg-white text-black py-0.5 px-2.5 my-2 text-sm cursor-pointer rounded-3xl items-center">
          25
        </span>
      </div>
      <div
        id="if-on-edge-bounce"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
      >
        {"If on edge, bounce"}
      </div>
      <div
        id="set-rotation-style-left-right"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        draggable="true"
        onDragStart={handleDragStart}
      >
        {"set rotation style left-right"}
      </div>
      {/* <div
      id="x-position"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-pointer items-center gap-3"
        draggable="true"
        onDragStart={handleDragStart}
      >
        <input
          type="checkbox"
          className="flex border boder-solid border-gray-700 cursor-pointer"
        />
        <span className="flex flex-row bg-blue-500 text-white rounded-3xl py-1 px-3 items-center">
          {"x position"}
        </span>
      </div>
      <div
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-pointer items-center gap-3"
        draggable="true"
        onDragStart={handleDragStart}
      >
        <input
          type="checkbox"
          className="flex border boder-solid border-gray-700 cursor-pointer"
        />
        <span className="flex flex-row bg-blue-500 text-white rounded-3xl py-1 px-3 items-center">
          {"y position"}
        </span>
      </div>
      <div
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-pointer items-center gap-3"
        draggable="true"
        onDragStart={handleDragStart}
      >
        <input
          type="checkbox"
          className="flex border boder-solid border-gray-700 cursor-pointer"
        />
        <span className="flex flex-row bg-blue-500 text-white rounded-3xl py-1 px-3 items-center">
          {"direction"}
        </span>
      </div> */}
    </React.Fragment>
  );
}

export default Motion;
