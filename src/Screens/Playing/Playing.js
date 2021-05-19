import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import LoseOverlay from "../../Components/LoseOverlay/LoseOverlay";
import WinOverlay from "../../Components/WinOverlay/WinOverlay";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";
import Stats from "../../Components/Stats/Stats";
import Wrestling from "../../Components/Wrestling/Wrestling";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID } from "../../Actions";
import { socket } from "../../constants";

const LoserOverlay = (props) => {
  return <LoseOverlay reset={props.reset} />;
};
const WinnerOverlay = (props) => {
  return <WinOverlay reset={props.reset} />;
};

//setGame, game, myID,socket,{ myPos, reset }

const Playing = () => {
  // const [stats, setStats] = useState({
  //   score: 10,
  //   athletics: 0,
  //   save: 0,
  // });
  const [myPos, setMyPos] = useState(3);

  const game = useSelector((state) => state.game);
  const myID = useSelector((state) => state.myID);
  const dispatch = useDispatch();

  const reset = () => {
    socket.off();
    dispatch(changeGame({}));
    dispatch(changeMyID(false));
  };

  const calcPos = () => {
    if (game[myID] === "p2") {
      const posDiff = 3 - game.position;
      const newPos = 3 + posDiff;
      return newPos;
    } else {
      return game.position;
    }
  };

  useEffect(() => {
    setMyPos(calcPos());
  }, [game.position]);

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
        {/* setGame={setGame} game={game} myID={myID} socket={socket}*/}
        <Roles />
        <p className="gameID">Game ID: {game.gameID}</p>
      </div>
      <div className="game">
        <div className="play-station"></div>
        <Wrestling myPos={myPos} />
        <div className="play-station">
          {/* setStats={setStats} */}
          <Stats />
          {/* stats={stats} */}
          <Roll myPos={myPos} />
        </div>
      </div>
    </div>
  );
};

export default Playing;
