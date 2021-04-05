import React from "react";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";

const Playing = ({ socket, setGame, game, myID, myPos }) => {
  // socket.on("update-game", ({ gameUpdate, resetting }) => {
  //   console.log(`are we resetting ${resetting}`);
  //   console.log(`do we have a game obj ${gameUpdate}`);
  //   setGame(gameUpdate);
  // });

  return (
    <div>
      <p>Game ID: {game.gameID}</p>
      <Roles socket={socket} setGame={setGame} game={game} myID={myID} />
      <p>{myPos}</p>
      <Roll socket={socket} myID={myID} game={game} setGame={setGame} />
    </div>
  );
};

export default Playing;
