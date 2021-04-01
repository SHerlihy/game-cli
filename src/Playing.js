import React from "react";
import Roles from "./Components/Roles";
import Roll from "./Components/Roll/Roll";

const Playing = ({ socket, setGame, game, myID }) => {
  socket.on("update-game", (gameUpdate) => {
    setGame(gameUpdate);
  });

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
