import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoll, toggleRollSelected } from "../../Actions";
import "./die.css";
const { v4: uuidv4 } = require("uuid");

const Die = ({ value, sumRoll, resetRollsRef }) => {
  const dispatch = useDispatch();

  let rolls = useRef({});
  const allRolls = useSelector((state) => state.rolls);

  if (allRolls[value]) {
    rolls.current = allRolls[value];
  }

  const selectRoll = (e) => {
    const val = !rolls.current[e].selected;
    sumRoll(rolls.current[e].value, val);
    dispatch(toggleRollSelected(e, val, value));
  };

  return (
    <div>
      <button onClick={() => dispatch(addRoll(value))}>D{value}</button>
      {Object.keys(rolls.current).map((e) => {
        return (
          <button
            className={rolls.current[e].selected ? "highlight" : "plain"}
            key={e}
            id={e}
            onClick={() => selectRoll(e)}
          >
            {rolls.current[e].value}
          </button>
        );
      })}
    </div>
  );
};

export default Die;
