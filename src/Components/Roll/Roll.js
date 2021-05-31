import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Dice from "../Dice/Dice";
import "./roll.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGame,
  changeSum,
  changeTwenties,
  resetRolls,
  setSubbed,
} from "../../Actions";
import { socket } from "../../constants";

const Roll = () => {
  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

  const strengthScore = useSelector((state) => state.strengthScore);
  const athleticsModifier = useSelector((state) => state.athleticsModifier);
  const strengthSavingModifier = useSelector(
    (state) => state.strengthSavingModifier
  );
  const myPos = useSelector((state) => state.myPos);
  const sum = useSelector((state) => state.sum);
  const myID = useSelector((state) => state.myID);
  const game = useSelector((state) => state.game);
  const subbed = useSelector((state) => state.subbed);

  // const [subbed, setSubbed] = useState("0");

  const current20Ref = useRef(0);
  const resetRollsRef = useRef(false);
  const subToRollUpdate = useRef(false);

  const dispatch = useDispatch();

  // likely creating multiple listeners due to being inside a component that is continually re-rendering
  // can't move outside component to mitigate until something to externally manage state is implemented

  useEffect(() => {
    if (!subToRollUpdate.current) {
      socket.on("roll-update", ({ gameUpdate, resetting }) => {
        dispatch(changeGame(gameUpdate));
        if (resetting) {
          dispatch(resetRolls());
          dispatch(changeSum(0));
          dispatch(changeTwenties([0, 0]));
          // setSubbed("0");
          dispatch(setSubbed("0"));
          current20Ref.current = 0;
          resetRollsRef.current = true;
        }
      });
      subToRollUpdate.current = true;
    }
  }, [socket]);

  const submitTotal = () => {
    const cliID = myID;
    const gameID = game.gameID;
    const combo = Number(sum) + Number(statToUse());
    const total = Number(combo);
    // setSubbed(total);
    dispatch(setSubbed(total));
    socket.emit("submit-total", { total, cliID, gameID });
  };

  const statToUse = () => {
    if (myPos === 4) {
      const scoreMod = parseInt((Number(strengthScore) - 10) / 2);
      return `${scoreMod}`;
    }
    if (myPos === 5) {
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
      <Dice resetRollsRef={resetRollsRef} current20Ref={current20Ref} />
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
