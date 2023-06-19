import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sprite from "./components/Sprite";

export default function App() {
  const [Move10Steps, setMove10Steps] = useState(0);
  const [Turn15DegreeUndo, setTurn15DegreeUndo] = useState(0);
  const [Turn15DegreeRedo, setTurn15DegreeRedo] = useState(0);
  const [SetYTo, setSetYTo] = useState(0);
  const [SetChangeByX, setSetChangeByX] = useState(0);
  const [SetChangeByY, setSetChangeByY] = useState(0);
  const [GlideSecsToRandomPosition, setGlideSecsToRandomPosition] = useState(0);
  const [GlideSecsXY, setGlideSecsXY] = useState(0);
  const [GoToRandomPosition, setGoToRandomPosition] = useState(0);
  const [GoToXYPosition, setGoToXYPosition] = useState(0);
  const [PointInDirection, setPointInDirection] = useState(0);
  const [PointTowards, setPointTowards] = useState(0);
  const [SetXTo, setSetXTo] = useState(0);

  const handleMove10Steps = () => {
    console.log("This is APP");
    setMove10Steps((prev) => prev + 10);
  };
  const handleTurn15DegreeRedo = () => {
    setTurn15DegreeRedo((prev) => {
      return prev + 15;
    });
  };
  const handleTurn15DegreeUndo = () => {
    setTurn15DegreeUndo((prev) => {
      return prev - 15;
    });
  };
  const handleChangeByX = () => {
    SetChangeByX((prev) => {
      return prev + 10;
    });
  };
  const handleChangeByY = () => {};
  const handleGlideSecsToRandomPosition = () => {};
  const handleGlideSecsXY = () => {};
  const handleGoToRandomPosition = () => {};
  const handleGoToXYPosition = () => {};
  const handlePointInDirection = () => {};
  const handlePointTowards = () => {};
  const handleSetXTo = () => {};
  const handleSetYTo = () => {};

  console.log("Move 10 Steps", Move10Steps);

  return (
    <div className="bg-blue-100 pt-6 font-sans overflow-hidden">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
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
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-col border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <div className="w-auto h-3/5 overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl mb-3">
            <PreviewArea
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
          {/* <div className="w-auto h-2/5 overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl">
            <Sprite />
          </div> */}
        </div>
      </div>
    </div>
  );
}
