import React, { useState } from "react";
import DieRoll from "./DieRoll/DieRoll";
const { v4: uuidv4 } = require("uuid");

const Dice = ({ setSum, twenties, setTwenties, fours, setFours }) => {
  const addTwenty = () => {
    const roll = Math.ceil(Math.random() * 20);
    const key = uuidv4();

    setTwenties((prev) => {
      return [...prev, [key, roll]];
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
      ? setSum((prev) => Number(prev) + Number(rolled))
      : setSum((prev) => Number(prev) - Number(rolled));
  };

  return (
    <div className="dice">
      <div className="twenties">
        <button onClick={addTwenty}>20</button>

        {twenties.map((el) => {
          return <DieRoll key={el[0]} sumRoll={sumRoll} rolled={el[1]} />;
        })}
      </div>
      <div className="fours">
        <button onClick={addFour}>4</button>

        {fours.map((el) => {
          return <DieRoll key={el[0]} sumRoll={sumRoll} rolled={el[1]} />;
        })}
      </div>
    </div>
  );
};

export default Dice;
