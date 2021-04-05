import React, { useState } from "react";
import io from "socket.io-client";
import "./roles.css";

const Roles = ({ socket, setGame, game, myID }) => {
  // const [p1, setP1] = useState(false);
  // const [p2, setP2] = useState(false);
  // const [spectator, setSpectator] = useState(false);
  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const handleRole = (e) => {
    const id = game.gameID;
    const role = e.target.value;
    socket.emit("set-role", { id, myID, role });
  };

  socket.on("role-update", ({ gameUpdate }) => {
    console.log("role update");
    console.log(gameUpdate);
    setGame(gameUpdate);
  });

  return (
    <div>
      <button
        onClick={handleRole}
        className={game[myID] === "p1" ? "selected" : "unselected"}
        value="p1"
      >
        p1
      </button>
      <button
        onClick={handleRole}
        className={game[myID] === "p2" ? "selected" : "unselected"}
        value="p2"
      >
        p2
      </button>
      <button
        onClick={handleRole}
        className={game[myID] === "spectator" ? "selected" : "unselected"}
        value="spectator"
      >
        spectator
      </button>
    </div>
  );
};

export default Roles;
