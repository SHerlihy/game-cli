import React, { useState } from "react";
import Roles from "./Components/Roles";
import Roll from "./Components/Roll";

const Playing = ({ socket, setGame, game, myID }) => {
  let myPos = game.position;

  if (game.myID === "p2") {
    let posDiff = game.position - 3;
    myPos = game.position - posDiff;
  }

  return (
    <div>
      <p>Game ID: {game.gameID}</p>
      <Roles socket={socket} setGame={setGame} game={game} myID={myID} />
      <p>{myPos}</p>
      <Roll socket={socket} myID={myID} game={game} />
    </div>
  );
};

export default Playing;
