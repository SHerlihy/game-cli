import React, { useState } from "react";
import Roles from "./Components/Roles";
import Roll from "./Components/Roll";

const Playing = ({ socket, setGame, game, myID }) => {
  socket.on("update-game", (gameUpdate) => {
    console.log("playing");
    setGame(gameUpdate);
  });

  console.log(game[myID] === "p2");

  const myPos = () => {
    if (game[myID] === "p2") {
      const posDiff = 3 - game.position;
      const newPos = 3 + posDiff;
      console.log(newPos);
      return newPos;
    } else {
      return game.position;
    }
  };

  // useEffect(() => {
  //   console.log("useEffect");
  //   if (game[myID] === "p2") {
  //     let posDiff = game.position - 4;
  //     myPos = game.position - posDiff;
  //   }
  // }, [game]);

  return (
    <div>
      <p>Game ID: {game.gameID}</p>
      <Roles socket={socket} setGame={setGame} game={game} myID={myID} />
      <p>{myPos()}</p>
      <Roll socket={socket} myID={myID} game={game} setGame={setGame} />
    </div>
  );
};

export default Playing;
