import React, { useState } from "react";
import Roles from "./Components/Roles";

const Playing = ({ socket, setGame, game, myID }) => {
  let myPos = game.position;

  if (game.myID === "p2") {
    let posDiff = game.position - 3;
    myPos = game.position - posDiff;
  }

  return (
    <div>
      <p>{myPos}</p>
      <Roles socket={socket} setGame={setGame} game={game} myID={myID} />
    </div>
  );
};

export default Playing;
