import React, { useState } from "react";
import io from "socket.io-client";
import Dice from "../Dice/Dice";

const Roll = ({ socket, myID, game, setGame }) => {
  const [sum, setSum] = useState(0);

  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const submitTotal = () => {
    const cliID = myID;
    const gameID = game.gameID;
    const total = `${sum}`;
    console.log(total);
    socket.emit("submit-total", { total, cliID, gameID });
  };

  socket.on("update-game", (gameUpdate) => {
    setGame(gameUpdate);
  });

  return (
    <div>
      <Dice setSum={setSum} />
      <p>{sum}</p>
      <button onClick={submitTotal}>Enter Sum</button>
    </div>
  );
};

export default Roll;
