import React, { useState } from "react";
import LoseOverlay from "../../Components/LoseOverlay/LoseOverlay";
import WinOverlay from "../../Components/WinOverlay/WinOverlay";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";
import Stats from "../../Components/Stats/Stats";
import Wrestling from "../../Components/Wrestling/Wrestling";

const Playing = ({ socket, setGame, game, myID, myPos, reset }) => {
  const [stats, setStats] = useState({
    score: "10",
    athletics: "+0",
    save: "+0",
  });

  return (
    <div className="playing">
      {myPos === 6 ? <LoseOverlay reset={reset} /> : null}
      {myPos === 0 ? <WinOverlay reset={reset} /> : null}
      <div className="top-play">
        <Roles socket={socket} setGame={setGame} game={game} myID={myID} />
        <p className="gameID">Game ID: {game.gameID}</p>
      </div>
      <div className="game">
        <div className="play-station"></div>
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
