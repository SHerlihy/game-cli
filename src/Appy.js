import React, { useState } from "react";
import Playing from "./Playing";
import NewGame from "./NewGame";
import io from "socket.io-client";

const Appy = () => {
  const [player, setPlayer] = useState({ total: null, role: "" });
  const [pos, setPos] = useState(3);
  const [game, setGame] = useState({});
  const [myID, setMyID] = useState();
  const [inputID, setInputID] = useState();
  const socket = io("http://localhost:8080");
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
