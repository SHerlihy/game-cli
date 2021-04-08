import React from "react";
import "./winOverlay.css";

const WinOverlay = ({ reset }) => {
  return (
    <div className="win-overlay">
      <p>Winner!</p>
      <button onClick={reset}>New Game?</button>
    </div>
  );
};

export default WinOverlay;
