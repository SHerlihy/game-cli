import React, { useState } from "react";
import RoleButtons from "./RoleButtons";
import io from "socket.io-client";
import Game from "./GameComponents/Game.js";
import Roll from "./Roll";

const socket = io("http://localhost:8080");

function App() {
  const [player, setPlayer] = useState({ total: null, role: "" });
  const [pos, setPos] = useState(3);
  socket.on("connect", () => {
    console.log("we connected");
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

  return (
    <div className="app">
      <RoleButtons setPlayer={setPlayer} />
      {pos === 6 ? <p>Player 2 WINS</p> : null}
      {pos === 0 ? <p>Player 1 WINS</p> : null}
      <Game setPos={setPos} pos={pos} />
      <Roll setPlayer={setPlayer} />
      <button onClick={(logit, sendTotal)}>log player</button>
    </div>
  );
}

export default App;
