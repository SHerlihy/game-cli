import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Dice from "../Dice/Dice";
import "./roll.css";

const Roll = ({ myPos, stats, socket, myID, game, setGame }) => {
  const [sum, setSum] = useState(0);
  const [subbed, setSubbed] = useState("0");
  const [fours, setFours] = useState([]);
  const [twenties, setTwenties] = useState([0, 0]);

  //for testing...would love to have something in the test file instead
  if (process.env.NODE_ENV === "test") {
    socket = io("");
  }

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
        setGame(gameUpdate);
        if (resetting) {
          setSum(0);
          setSubbed("0");
          setFours([]);
          console.log("resetting 20s");
          setTwenties([]);
        }
      });
      subToRollUpdate.current = true;
    }
  }, []);

  const statToUse = () => {
    if (myPos === 2) {
      const scoreMod = parseInt((Number(stats.score) - 10) / 2);
      return `${scoreMod}`;
    }
    if (myPos === 1) {
      return stats.save;
    }
    return stats.athletics;
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
        sum={sum}
        setSum={setSum}
        twenties={twenties}
        setTwenties={setTwenties}
        fours={fours}
        setFours={setFours}
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
