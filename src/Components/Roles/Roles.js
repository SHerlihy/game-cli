import React from "react";
import io from "socket.io-client";

const Roles = ({ socket, setGame, game, myID }) => {
  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const handleRole = (e) => {
    const id = game.gameID;
    const role = e.target.value;
    socket.emit("set-role", { id, myID, role });
  };

  socket.on("update-game", (gameUpdate) => {
    setGame(gameUpdate);
  });

  return (
    <div>
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
};

export default Roles;
