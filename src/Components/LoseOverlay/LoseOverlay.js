import React from "react";
import "./loseOverlay.css";

const LoseOverlay = ({ reset }) => {
  return (
    <div className="lose-overlay">
      <p>Loser!</p>
      <button onClick={reset}>New Game?</button>
    </div>
  );
};

export default LoseOverlay;
