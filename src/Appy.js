import React, { useState } from "react";
import Playing from "./Screens/Playing/Playing";
import NewGame from "./Screens/NewGame/NewGame";
import io from "socket.io-client";
import Dice from "./Components/Dice/Dice";

const socket = io("http://localhost:8080");

const Appy = () => {
  const [game, setGame] = useState({});
  const [myID, setMyID] = useState();
  const [inputID, setInputID] = useState();

  return (
    <div>
      {myID ? (
        <Playing setGame={setGame} game={game} socket={socket} myID={myID} />
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

export default Appy;
