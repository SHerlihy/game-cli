import React, { useState } from "react";
import io from "socket.io-client";
import Dice from "../Dice/Dice";
import "./roll.css";

const Roll = ({ socket, myID, game, setGame }) => {
  const [sum, setSum] = useState(0);
  const [subbed, setSubbed] = useState("0");

  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const submitTotal = () => {
    const cliID = myID;
    const gameID = game.gameID;
    const total = `${sum}`;
    setSubbed(total);
    socket.emit("submit-total", { total, cliID, gameID });
  };

  socket.on("roll-update", ({ gameUpdate, reset }) => {
    console.log("roll update");
    console.log(gameUpdate);
    setGame(gameUpdate);
    if (reset) {
      console.log("reset");
    }
  });

  //inf looped
  // if (game[game[myID]] === null) {
  //   setSubbed("Enter Total");
  // }

  return (
    <div>
      <Dice setSum={setSum} />
      <p>{sum}</p>
      <button
        onClick={submitTotal}
        className={game[game[myID]] ? "selected" : "unselected"}
      >
        Total: {subbed}
      </button>
    </div>
  );
};

export default Roll;
