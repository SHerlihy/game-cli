import React, { useState } from "react";
import io from "socket.io-client";

const Roll = ({ socket, myID, game, setGame }) => {
  const [total, setTotal] = useState("");

  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const submitTotal = (e) => {
    e.preventDefault();
    const cliID = myID;
    const gameID = game.gameID;
    socket.emit("submit-total", { total, cliID, gameID });
  };

  const handleTotal = (e) => {
    setTotal(e.target.value);
  };

  socket.on("update-game", (gameUpdate) => {
    console.log("playing");
    setGame(gameUpdate);
  });

  return (
    <div>
      <form onSubmit={submitTotal}>
        <input
          data-testid="rollinput"
          value={total}
          onChange={handleTotal}
        ></input>
        <button type="submit">Submit Total</button>
      </form>
    </div>
  );
};

export default Roll;
