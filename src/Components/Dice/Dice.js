import React, { useState } from "react";
import DieRoll from "./DieRoll/DieRoll";

const Dice = ({ setSum }) => {
  const [twenties, setTwenties] = useState([]);
  const [fours, setFours] = useState([]);

  const addTwenty = () => {
    const roll = Math.ceil(Math.random() * 20);

    setTwenties((prev) => {
      return [...prev, roll];
    });
  };

  const addFour = () => {
    const roll = Math.ceil(Math.random() * 4);

    setFours((prev) => {
      return [...prev, roll];
    });
  };

  const sumRoll = (rolled, unselected) => {
    unselected
      ? setSum((prev) => Number(prev) + Number(rolled))
      : setSum((prev) => Number(prev) - Number(rolled));
  };

  return (
    <div>
      <button onClick={addTwenty}>20</button>
      <ul>
        {twenties.map((el) => {
          return <DieRoll sumRoll={sumRoll} rolled={el} />;
        })}
      </ul>
      <button onClick={addFour}>4</button>
      <ul>
        {fours.map((el) => {
          return <DieRoll sumRoll={sumRoll} rolled={el} />;
        })}
      </ul>
    </div>
  );
};

export default Dice;
