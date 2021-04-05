import React, { useState } from "react";
import Playing from "./Screens/Playing/Playing";
import NewGame from "./Screens/NewGame/NewGame";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const Appy = () => {
  const [game, setGame] = useState({});
  const [myID, setMyID] = useState();
  const [inputID, setInputID] = useState();

  // socket.on("disconnect", (reason) => {
  //   if (reason === "io server disconnect") {
  //     // the disconnection was initiated by the server, you need to reconnect manually
  //     socket.connect();
  //   }
  //   // else the socket will automatically try to reconnect
  // });

  const reset = () => {
    // we don't want to d/c we want to get new game
    // socket.close();
    setGame({});
    setMyID();
    setInputID();
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

  if (myPos() === 0) {
    return (
      <div>
        <p>Loser!</p>
        <button onClick={reset}>New Game?</button>
      </div>
    );
  } else if (myPos() === 6) {
    return (
      <div>
        <p>Winner!</p>
        <button onClick={reset}>New Game?</button>
      </div>
    );
  } else {
    return (
      <div>
        {myID ? (
          <Playing
            setGame={setGame}
            game={game}
            socket={socket}
            myID={myID}
            myPos={myPos()}
          />
        ) : (
          <NewGame
            setMyID={setMyID}
            myID={myID}
            setGame={setGame}
            game={game}
            setInputID={setInputID}
            inputID={inputID}
            socket={socket}
          />
        )}
      </div>
    );
  }
};

export default Appy;
