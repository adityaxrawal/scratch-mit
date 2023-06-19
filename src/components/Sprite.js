import React from "react";

function Sprite() {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-row py-3 px-4 items-center gap-5 text-xs">
          <span>Sprite</span>
          <span className="w-40 flex py-3 px-4 border border-solid border-gray-200 rounded-3xl items-center">
            {" "}
            Cat{" "}
          </span>
          <span>x</span>
          <sapn className="w-20 flex py-3 px-4 border border-solid border-gray-200 rounded-3xl items-center">
            26
          </sapn>
        </div>
      </div>
    </div>
  );
}

export default Sprite;
