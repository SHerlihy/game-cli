import React, { useState } from "react";
import ReactDOM from "react-dom";
import Roll20 from "../Roll20/Roll20";
import DieRoll from "./DieRoll/DieRoll";
const { v4: uuidv4 } = require("uuid");

const Dice = ({ sum, setSum, twenties, setTwenties, fours, setFours }) => {
  // const key = uuidv4();
  const addTwenty = () => {
    const roll = Math.ceil(Math.random() * 20);
    setTwenties((prev) => {
      return [...prev, roll];
    });
  };

  const addFour = () => {
    const roll = Math.ceil(Math.random() * 4);
    const key = uuidv4();

    setFours((prev) => {
      return [...prev, [key, roll]];
    });
  };

  const sumRoll = (rolled, unselected) => {
    unselected
      ? setSum((prev) => {
          return Number(prev) + Number(rolled);
        })
      : setSum((prev) => {
          return Number(prev) - Number(rolled);
        });
  };

  return (
    <div className="dice">
      <Roll20
        sum={sum}
        addTwenty={addTwenty}
        twenties={twenties}
        setTwenties={setTwenties}
        sumRoll={sumRoll}
      />
      <div className="fours">
        <button onClick={addFour}>D4 </button>

        {fours.map((el) => {
          return <DieRoll key={el[0]} sumRoll={sumRoll} rolled={el[1]} />;
        })}
      </div>
    </div>
  );
};

export default Dice;
