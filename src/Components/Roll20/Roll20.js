import React, { useState, useEffect } from "react";
import DieRoll from "../Dice/DieRoll/DieRoll";
import "./roll20.css";

const Roll20 = ({ addTwenty, twenties, sumRoll }) => {
  const [rollWith, setRollWith] = useState({
    normal: true,
    advantage: false,
    disadvantage: false,
  });

  const rollWithClick = (rolling) => {
    if (rolling === "advantage") {
      setRollWith({
        normal: false,
        advantage: true,
        disadvantage: false,
      });
    }
    if (rolling === "disadvantage") {
      setRollWith({
        normal: false,
        advantage: false,
        disadvantage: true,
      });
    }
    if (rolling === "normal") {
      setRollWith({
        normal: true,
        advantage: false,
        disadvantage: false,
      });
    }
  };

  const doubleRoll = () => {
    addTwenty();
    addTwenty();
  };

  const highest = () => {
    if (twenties[0][1] > twenties[1][1]) {
      return twenties[0];
    }
    if (twenties[1][1] > twenties[0][1]) {
      return twenties[1];
    } else {
      return false;
    }
  };
  const lowest = () => {
    console.log(twenties[0][1]);
    if (twenties[0][1] < twenties[1][1]) {
      return twenties[0];
    }
    if (twenties[1][1] < twenties[0][1]) {
      return twenties[1];
    } else {
      return false;
    }
  };

  // const lowest = () => {
  //   const low = () => {
  //     twenties.reduce((acc, cur) => {
  //       acc.roll < cur.roll ? acc.roll : cur.roll;
  //     });
  //   };
  //   return low();
  // };
  return (
    <div className="roll20">
      <button
        onClick={() => rollWithClick("normal")}
        className={`normal ${rollWith.normal ? "highlight" : "plain"}`}
      >
        Normal
      </button>
      <div className="mods">
        <button
          onClick={() => rollWithClick("advantage")}
          className={`advantage ${rollWith.advantage ? "highlight" : "plain"}`}
        >
          Advantage
        </button>
        <button
          onClick={() => rollWithClick("disadvantage")}
          className={`disadvantage ${
            rollWith.disadvantage ? "highlight" : "plain"
          }`}
        >
          Disadvantage
        </button>
      </div>
      <button onClick={doubleRoll} className="do-roll">
        Roll 20
      </button>
      <div className="twenties">
        {/* <button onClick={addTwenty}>20</button> */}

        {twenties.map((el, i, arr) => {
          let preSelect = false;
          if (rollWith.normal && i === 0) {
            preSelect = true;
          }
          if (rollWith.advantage && highest() === el) {
            preSelect = true;
          }
          if (rollWith.disadvantage && lowest() === el) {
            preSelect = true;
          }
          return (
            <DieRoll
              preSelect={preSelect}
              key={el[0]}
              sumRoll={sumRoll}
              rolled={el[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Roll20;
