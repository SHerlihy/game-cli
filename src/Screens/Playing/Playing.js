import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import LoseOverlay from "../../Components/LoseOverlay/LoseOverlay";
import WinOverlay from "../../Components/WinOverlay/WinOverlay";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";
import Stats from "../../Components/Stats/Stats";
import Wrestling from "../../Components/Wrestling/Wrestling";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID, changeMyPos } from "../../Actions";
import { socket } from "../../constants";

const LoserOverlay = (props) => {
  return <LoseOverlay reset={props.reset} />;
};
const WinnerOverlay = (props) => {
  return <WinOverlay reset={props.reset} />;
};

//setGame, game, myID,socket,{ myPos, reset }

const Playing = () => {
  const game = useSelector((state) => state.game);
  const myID = useSelector((state) => state.myID);
  const myPos = useSelector((state) => state.myPos);
  const dispatch = useDispatch();

  const reset = () => {
    socket.off();
    dispatch(changeGame({}));
    dispatch(changeMyID(false));
  };

  useEffect(() => {
    if (game.position) {
      dispatch(changeMyPos(game.position, game[myID]));
    }
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
        <Roles />
        <p className="gameID">Game ID: {game.gameID}</p>
      </div>
      <div className="game">
        <div className="play-station"></div>
        <Wrestling myPos={myPos} />
        <div className="play-station">
          <Stats />
          <Roll myPos={myPos} />
        </div>
      </div>
    </div>
  );
};

export default Playing;
