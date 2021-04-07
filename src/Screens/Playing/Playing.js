import React, { useState } from "react";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";
import Stats from "../../Components/Stats/Stats";
import Wrestling from "../../Components/Wrestling/Wrestling";

const Playing = ({ socket, setGame, game, myID, myPos }) => {
  const [stats, setStats] = useState({
    score: "10",
    athletics: "+0",
    save: "+0",
  });
  // socket.on("update-game", ({ gameUpdate, resetting }) => {
  //   console.log(`are we resetting ${resetting}`);
  //   console.log(`do we have a game obj ${gameUpdate}`);
  //   setGame(gameUpdate);
  // });

  return (
    <div className="playing">
      <div className="top-play">
        <Roles socket={socket} setGame={setGame} game={game} myID={myID} />
        <p className="gameID">Game ID: {game.gameID}</p>
      </div>
      <div className="game">
        <Wrestling myPos={myPos} />
        <div className="play-station">
          <Stats setStats={setStats} />
          <Roll
            myPos={myPos}
            stats={stats}
            socket={socket}
            myID={myID}
            game={game}
            setGame={setGame}
          />
        </div>
      </div>
    </div>
  );
};

export default Playing;
