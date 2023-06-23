import React from "react";
import MoveX from "./SideBar/motion/MoveX";
import TurnAntiClockwise from "./SideBar/motion/TurnAntiClockwise";
import TurnClockwise from "./SideBar/motion/TurnClockwise";
import GotoXY from "./SideBar/motion/Goto";
import SayMessage from "./SideBar/looks/SayMessage";
import SayMessageWithTimer from "./SideBar/looks/SayMessageWithTimer";
import Size from "./SideBar/looks/Size";
import Wait from "./SideBar/control/Wait";
import Repeat from "./SideBar/control/Repeat";
import MoveY from "./SideBar/motion/MoveY";
import BroadcastMessage from "./SideBar/events/broadcast";
import Think from "./SideBar/looks/Think";
import ThinkWithTimer from "./SideBar/looks/ThinkWithTimer";

// fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "MOVE":
      return <MoveX comp_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;

    case "GOTO_XY":
      return <GotoXY comp_id={id} />;

    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;

    case "SIZE":
      return <Size comp_id={id} />;

    case "BROADCAST":
      return <BroadcastMessage comp_id={id} />;

    case "WAIT":
      return <Wait comp_id={id} />;

    case "REPEAT":
      return <Repeat comp_id={id} />;

    case "THINK":
      return <Think comp_id={id} />;

    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;

    default:
      return React.null;
  }
};
