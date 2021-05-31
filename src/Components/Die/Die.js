import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./die.css";
const { v4: uuidv4 } = require("uuid");

const Die = ({ value, sumRoll, resetRollsRef }) => {
  // const [rolls, setRolls] = useState({});
  const rolls = useSelector((state) => state.rolls);
  //causes inf render loop
  // if (resetRollsRef.current) {
  //   setRolls({});
  // }

  // if (resetRollsRef.current) {
  //   setRolls({});
  // }

  // const addDie = () => {
  //   const roll = Math.ceil(Math.random() * value);

  //   setRolls((prev) => {
  //     let thisRolls = { ...prev };
  //     thisRolls[uuidv4()] = { value: roll, selected: false };
  //     return thisRolls;
  //   });
  // };

  const selectRoll = (e) => {
    const val = !rolls[e].selected;
    sumRoll(rolls[e].value, val);
    // setRolls((prev) => {
    //   let thisRolls = { ...prev };
    //   thisRolls[e].selected = val;
    //   return thisRolls;
    // });
  };

  return (
    <div>
      <button onClick={addDie}>D{value}</button>
      {Object.keys(rolls).map((e) => {
        console.log(rolls[e].value);
        return (
          <button
            className={rolls[e].selected ? "highlight" : "plain"}
            key={e}
            id={e}
            onClick={() => selectRoll(e)}
          >
            {rolls[e].value}
          </button>
        );
      })}
    </div>
  );
};

export default Die;
