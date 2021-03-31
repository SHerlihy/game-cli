import React, { useState } from "react";

const Roll = ({ socket, myID, game, setGame }) => {
  const [total, setTotal] = useState();

  const submitTotal = (e) => {
    e.preventDefault();
    const subTotal = Number(total);
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
        <input value={total} onChange={handleTotal}></input>
        <button type="submit">Submit Total</button>
      </form>
    </div>
  );
};

export default Roll;
