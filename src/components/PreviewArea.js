import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({
  Move10Steps,
  Turn15DegreeRedo,
  Turn15DegreeUndo,
  SetYTo,
  SetChangeByX,
  SetChangeByY,
  GlideSecsToRandomPosition,
  GlideSecsXY,
  GoToRandomPosition,
  GoToXYPosition,
  PointInDirection,
  PointTowards,
  SetXTo,
}) {
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <CatSprite
        Move10Steps={Move10Steps}
        Turn15DegreeRedo={Turn15DegreeRedo}
        Turn15DegreeUndo={Turn15DegreeUndo}
        SetYTo={SetYTo}
        SetChangeByX={SetChangeByX}
        SetChangeByY={SetChangeByY}
        GlideSecsToRandomPosition={GlideSecsToRandomPosition}
        GlideSecsXY={GlideSecsXY}
        GoToXYPosition={GoToXYPosition}
        GoToRandomPosition={GoToRandomPosition}
        PointInDirection={PointInDirection}
        PointTowards={PointTowards}
        SetXTo={SetXTo}
      />
    </div>
  );
}
