import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Dice from "../Dice/Dice";
import "./roll.css";

const Roll = ({ myPos, stats, socket, myID, game, setGame }) => {
  const [sum, setSum] = useState(0);
  const [subbed, setSubbed] = useState("0");
  const [twenties, setTwenties] = useState([]);
  const [fours, setFours] = useState([]);

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

  useEffect(() => {
    socket.on("roll-update", ({ gameUpdate, resetting }) => {
      setGame(gameUpdate);
      console.log("reset");
      if (resetting) {
        console.log("reset");
        setSum(0);
        setSubbed("0");
        setFours([]);
        setTwenties([]);
      }
    });
    // return () => {
    //   cleanup
    // }
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

  return (
    <div className="roll">
      <Dice
        setSum={setSum}
        twenties={twenties}
        setTwenties={setTwenties}
        fours={fours}
        setFours={setFours}
      />
      <div className="right-side">
        <p className="sum">
          {sum} {statToUse()}
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
