import React from "react";
import Motion from "./SideBar/Motion";
import Events from "./SideBar/Events";
import Controls from "./SideBar/Controls";
import Looks from "./SideBar/Looks";

export default function Sidebar({
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
  return (
    <div className="w-90 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {/* -----------------------------------------------Event Labels--------------------------------------------- */}
      <Events />
      {/* -----------------------------------------------Motion Labels-------------------------------------------- */}
      <Motion
        handleMove10Steps={handleMove10Steps}
        handleTurn15DegreeUndo={handleTurn15DegreeUndo}
        handleTurn15DegreeRedo={handleTurn15DegreeRedo}
        handleSetYTo={handleSetYTo}
        handleChangeByX={handleChangeByX}
        handleChangeByY={handleChangeByY}
        handleGlideSecsToRandomPosition={handleGlideSecsToRandomPosition}
        handleGlideSecsXY={handleGlideSecsXY}
        handleGoToRandomPosition={handleGoToRandomPosition}
        handleGoToXYPosition={handleGoToXYPosition}
        handlePointInDirection={handlePointInDirection}
        handlePointTowards={handlePointTowards}
        handleSetXTo={handleSetXTo}
      />
      {/* -----------------------------------------------Control Labels------------------------------------------- */}
      <Controls />
      {/* -----------------------------------------------Looks Labels---------------------------------------------- */}
      <Looks />
    </div>
  );
}
