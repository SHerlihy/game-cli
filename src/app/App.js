import React, { useState } from "react";
import Playing from "../Screens/Playing/Playing";
import NewGame from "../Screens/NewGame/NewGame";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID } from "../Actions";

const socket = io("http://localhost:8080");

const App = () => {
  const game = useSelector((state) => state.game);
  const myID = useSelector((state) => state.myID);
  const dispatch = useDispatch();

  // const [game, setGame] = useState({});
  // const [myID, setMyID] = useState("");
  const [inputID, setInputID] = useState("");

  const reset = () => {
    socket.off();
    dispatch(changeGame({}));
    dispatch(changeMyID(false));
    // setMyID();
    setInputID();
  };

  console.log(myID);

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
      {myID ? (
        <Playing
          // setGame={setGame}
          // game={game}
          socket={socket}
          // myID={myID}
          myPos={myPos()}
          reset={reset}
        />
      ) : (
        <NewGame
          // setMyID={setMyID}
          // myID={myID}
          // setGame={setGame}
          // game={game}
          setInputID={setInputID}
          inputID={inputID}
          socket={socket}
        />
      )}
    </div>
  );
};

export default App;
