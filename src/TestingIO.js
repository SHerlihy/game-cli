import React, { useState } from "react";
import RoleButtons from "./RoleButtons";
import io from "socket.io-client";
import Game from "./GameComponents/Game.js";
import Roll from "./Roll";

const socket = io("http://localhost:8080");

function App() {
  const [player, setPlayer] = useState({ total: null, role: "" });
  const [pos, setPos] = useState(3);
  const [game, setGame] = useState({});
  const [myID, setMyID] = useState();
  const [inputID, setInputID] = useState();
  socket.on("connect", () => {
    console.log("we connected");
  });

  const create = () => {
    socket.emit("create-game");
  };

  socket.on("created-game", ({ newGame, cliID }) => {
    setMyID(cliID);
    setGame(newGame);
  });

  const joinGame = (e) => {
    e.preventDefault();
    socket.emit("join-game", inputID);
  };

  socket.on("joining-game", ({ joinGame }) => {
    const x = joinGame.clients.length;
    setMyID(joinGame.clients[x - 1]);
    setGame(joinGame);
    console.log(game);
    console.log(myID);
  });

  const handleRole = (e) => {
    const id = game.gameID;
    const role = e.target.value;
    console.log(id);
    socket.emit("set-role", { id, myID, role });
  };

  socket.on("setting-role", (gameUpdate) => {
    console.log(gameUpdate);
    setGame(gameUpdate);
  });

  socket.on("update-position", (position) => {
    setPos(position);
  });

  const sendTotal = () => {
    socket.emit("submit-total", player);
  };

  const logit = () => {
    console.log(player);
  };

  const handleInputID = (e) => {
    setInputID(e.target.value);
  };

  return (
    <div className="app">
      <button onClick={create}>Create</button>
      <p>{game.position}</p>
      <p>{game.gameID}</p>
      <form onSubmit={joinGame}>
        <input value={inputID} onChange={handleInputID}></input>
        <button type="submit">Join</button>
      </form>
      <button onClick={handleRole} value="p1">
        p1
      </button>
      <button onClick={handleRole} value="p2">
        p2
      </button>
      <button onClick={handleRole} value="spectator">
        spectator
      </button>
    </div>
  );
}

export default App;
