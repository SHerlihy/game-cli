import React, { useState } from "react";
import Playing from "../Screens/Playing/Playing";
import NewGame from "../Screens/NewGame/NewGame";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID } from "../Actions";
import { socket } from "../constants";

const App = () => {
  const game = useSelector((state) => state.game);
  const myID = useSelector((state) => state.myID);
  const dispatch = useDispatch();

  const reset = () => {
    socket.off();
    dispatch(changeGame({}));
    dispatch(changeMyID(false));
  };

  const myPos = () => {
    if (game[myID] === "p2") {
      const posDiff = 3 - game.position;
      const newPos = 3 + posDiff;
      return newPos;
    } else {
      return game.position;
    }
  };

  return (
    <div className="app">
      {myID ? <Playing myPos={myPos()} reset={reset} /> : <NewGame />}
    </div>
  );
};

export default App;
