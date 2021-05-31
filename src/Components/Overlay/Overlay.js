import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID } from "../../Actions";
import { socket } from "../../constants";
import "./loseOverlay.css";

const Overlay = () => {
  const dispatch = useDispatch();
  const myPos = useSelector((state) => state.myPos);
  const reset = () => {
    socket.off();
    dispatch(changeGame({}));
    dispatch(changeMyID(false));
  };

  const overlayStyle = () => {
    if (myPos === 0) return "lose-overlay";
    if (myPos === 6) return "win-overlay";
  };

  return (
    <div className={"overlay"}>
      <p>
        {myPos === 0 && "Winner!"}
        {myPos === 6 && "Loser!"}
      </p>
      <button onClick={reset}>New Game?</button>
    </div>
  );
};

export default Overlay;
