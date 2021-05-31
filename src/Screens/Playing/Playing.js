import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Overlay from "../../Components/Overlay/Overlay";
import Roles from "../../Components/Roles/Roles";
import Roll from "../../Components/Roll/Roll";
import Stats from "../../Components/Stats/Stats";
import Wrestling from "../../Components/Wrestling/Wrestling";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeMyID, changeMyPos } from "../../Actions";
import { socket } from "../../constants";

// const EndGameOverlay = (props) => {
//   return <Overlay reset={props.reset} />;
// };

//setGame, game, myID,socket,{ myPos, reset }

const Playing = () => {
  const game = useSelector((state) => state.game);
  const myID = useSelector((state) => state.myID);
  const myPos = useSelector((state) => state.myPos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (game.position) {
      dispatch(changeMyPos(game.position, game[myID]));
    }
  }, [game.position]);

  const displayOverlay = () => {
    if (myPos === 6 || myPos === 0) {
      return ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay")
      );
    }
  };

  return (
    <div className="playing">
      {displayOverlay()}
      {/* {myPos === 0 &&
        ReactDOM.createPortal(
          <WinnerOverlay />,
          document.getElementById("overlay")
        )} */}
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
