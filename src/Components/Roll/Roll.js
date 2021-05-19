import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Dice from "../Dice/Dice";
import "./roll.css";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from "../../Actions";
import { socket } from "../../constants";

//game, setGame, myID, socket,stats

const Roll = ({ myPos }) => {
  const strengthScore = useSelector((state) => state.strengthScore);
  const athleticsModifier = useSelector((state) => state.athleticsModifier);
  const strengthSavingModifier = useSelector(
    (state) => state.strengthSavingModifier
  );

  const [sum, setSum] = useState(0);
  const [subbed, setSubbed] = useState("0");
  const current20Ref = useRef(0);
  const resetRollsRef = useRef(false);

  const myID = useSelector((state) => state.myID);

  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const submitTotal = () => {
    const cliID = myID;
    const gameID = game.gameID;
    const combo = Number(sum) + Number(statToUse());
    const total = `${combo}`;
    setSubbed(total);
    socket.emit("submit-total", { total, cliID, gameID });
  };

  // likely creating multiple listeners due to being inside a component that is continually re-rendering
  // can't move outside component to mitigate until something to externally manage state is implemented

  const subToRollUpdate = useRef(false);

  useEffect(() => {
    if (!subToRollUpdate.current) {
      socket.on("roll-update", ({ gameUpdate, resetting }) => {
        // setGame(gameUpdate);
        dispatch(changeGame(gameUpdate));
        if (resetting) {
          setSum(0);
          setSubbed("0");
          current20Ref.current = 0;
          resetRollsRef.current = true;
        }
      });
      subToRollUpdate.current = true;
    }
  }, [socket]);

  const statToUse = () => {
    if (myPos === 2) {
      const scoreMod = parseInt((Number(strengthScore) - 10) / 2);
      return `${scoreMod}`;
    }
    if (myPos === 1) {
      return strengthSavingModifier;
    }
    return athleticsModifier;
  };

  const formatSign = (statZero) => {
    if (statZero !== "-" && statZero !== "+") {
      return "+";
    }
    if (statZero === "+") {
      return null;
    }
    if (statZero === "-") {
      return null;
    }
  };

  return (
    <div className="roll">
      <Dice
        resetRollsRef={resetRollsRef}
        current20Ref={current20Ref}
        sum={sum}
        setSum={setSum}
      />
      <div className="right-side">
        <p className="sum">
          {sum} {formatSign(statToUse()[0])}
          {statToUse()}
        </p>
        <button
          onClick={submitTotal}
          className={
            (game[game[myID]] ? "selected" : "unselected", "sub-total")
          }
        >
          Total: {subbed}
        </button>
      </div>
    </div>
  );
};

export default Roll;
