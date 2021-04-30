import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./roll20.css";

const Roll20 = () => {
  const [selectedRoll, setSelectedRoll] = useState(0);
  const twentiesRef = useRef([0, 0]);
  const advantage = useRef("normal");

  const twoTwenties = () => {
    const theRoll = [];
    const aTwenty = () => {
      return Math.ceil(Math.random() * 20);
    };
    theRoll.push(aTwenty());
    theRoll.push(aTwenty());
    twentiesRef.current = theRoll;
  };

  const selecting = (rolls, adv) => {
    if (adv === "advantage") {
      return setSelectedRoll(Math.max(...rolls));
    }
    if (adv === "disadvantage") {
      return setSelectedRoll(Math.min(...rolls));
    }
    setSelectedRoll(rolls[0]);
  };

  return (
    <div className="roll20">
      <button
        onClick={() => {
          console.log(twentiesRef.current);
          twoTwenties();
          selecting(twentiesRef.current, "advantage");
        }}
        className="do-roll"
      >
        Roll 20 <i className="fas fa-dice-d20"></i>
      </button>
      <p>{twentiesRef.current[0]}</p>
      <p>{twentiesRef.current[1]}</p>
      <p>{selectedRoll}</p>
    </div>
  );
};

export default Roll20;
