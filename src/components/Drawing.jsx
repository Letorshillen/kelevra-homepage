import React from "react";

const Drawing = (props) => {
  return props.showDrawing ? (
    <div className="fixed grid place-items-center top-0 z-40 w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-l">
        <img src={props.drawing} alt={props.title} className="w-auto h-3/4" />
        <h3 className="mt-8">{props.title}</h3>
      </div>
      <div
        className="fixed cursor-pointer top-0 left-0 h-screen w-screen bg-white opacity-80 -z-1"
        onClick={props.close}
      ></div>
    </div>
  ) : null;
};

export default Drawing;
