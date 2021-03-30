import React from "react";

const Roles = ({ socket, setGame, game, myID }) => {
  const handleRole = (e) => {
    const id = game.gameID;
    const role = e.target.value;
    socket.emit("set-role", { id, myID, role });
  };

  socket.on("setting-role", (gameUpdate) => {
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
