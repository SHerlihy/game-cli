import React, { useState } from "react";
import Playing from "../Screens/Playing/Playing";
import NewGame from "../Screens/NewGame/NewGame";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const App = () => {
  const [game, setGame] = useState({});
  const [myID, setMyID] = useState("");
  const [inputID, setInputID] = useState("");

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
    socket.off();
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

  return (
    <div className="app">
      {myID ? (
        <Playing
          setGame={setGame}
          game={game}
          socket={socket}
          myID={myID}
          myPos={myPos()}
          reset={reset}
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
};

export default App;
