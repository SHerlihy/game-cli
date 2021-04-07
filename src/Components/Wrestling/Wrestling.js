import React from "react";
import "./wrestling.css";

const Wrestling = ({ myPos }) => {
  const playerArm = () => {
    let arm = "";
    switch (myPos) {
      case 0:
        arm = "p-zero";
        break;
      case 1:
        arm = "p-one";
        break;
      case 2:
        arm = "p-two";
        break;
      case 3:
        arm = "p-three";
        break;
      case 4:
        arm = "p-four";
        break;
      case 5:
        arm = "p-five";
        break;
      case 6:
        arm = "p-six";
        break;
      default:
      // code block
    }
    return arm;
  };
  const opponentArm = () => {
    let arm = "";
    const diff = 3 - myPos;
    const opponentPosition = 3 + diff;
    switch (opponentPosition) {
      case 0:
        arm = "o-zero";
        break;
      case 1:
        arm = "o-one";
        break;
      case 2:
        arm = "o-two";
        break;
      case 3:
        arm = "o-three";
        break;
      case 4:
        arm = "o-four";
        break;
      case 5:
        arm = "o-five";
        break;
      case 6:
        arm = "o-six";
        break;
      default:
      // code block
    }
    return arm;
  };
  return (
    <div className="wrestle-wrapper">
      <div className="wrestling">
        <div className="centerline"></div>
        <div className="opponent-arm">
          <div className="o-bicep"></div>
          <div className={opponentArm()}></div>
        </div>
        <div className="player-arm">
          <div className="p-bicep"></div>
          <div className={playerArm()}></div>
        </div>
      </div>
    </div>
  );
};

export default Wrestling;
