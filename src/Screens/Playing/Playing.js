import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoseOverlay from "../../Components/LoseOverlay/LoseOverlay";
import WinOverlay from "../../Components/WinOverlay/WinOverlay";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";
import Stats from "../../Components/Stats/Stats";
import Wrestling from "../../Components/Wrestling/Wrestling";
import { useDispatch, useSelector } from "react-redux";

const LoserOverlay = (props) => {
  return <LoseOverlay reset={props.reset} />;
};
const WinnerOverlay = (props) => {
  return <WinOverlay reset={props.reset} />;
};

//setGame, game, myID,

const Playing = ({ socket, myPos, reset }) => {
  const [stats, setStats] = useState({
    score: 10,
    athletics: 0,
    save: 0,
  });

  const game = useSelector((state) => state.game);

  return (
    <div className="playing">
      {myPos === 6 &&
        ReactDOM.createPortal(
          <LoserOverlay reset={reset} />,
          document.getElementById("overlay")
        )}
      {myPos === 0 &&
        ReactDOM.createPortal(
          <WinnerOverlay reset={reset} />,
          document.getElementById("overlay")
        )}
      <div className="top-play">
        {/* setGame={setGame} game={game} myID={myID}*/}
        <Roles socket={socket} />
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
            // myID={myID}
            // game={game}
            // setGame={setGame}
          />
        </div>
      </div>
    </div>
  );
};

export default Playing;
