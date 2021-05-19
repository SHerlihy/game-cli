import React, { useState, useRef, useEffect } from "react";
import "./roll20.css";

const Roll20 = ({ sumRoll, current20Ref, resetRollsRef }) => {
  const [rollWith, setRollWith] = useState("normal");
  const twentiesRef = useRef([0, 0]);

  const advantageRef = useRef("normal");

  // useEffect(() => {
  //   if (resetRollsRef.current === true) {
  //     twentiesRef.current = [0, 0];
  //   }
  // }, [resetRollsRef]);

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
      current20Ref.current = Math.max(...rolls);
      sumRoll(current20Ref.current, true);
      return;
    }
    if (adv === "disadvantage") {
      current20Ref.current = Math.min(...rolls);
      sumRoll(current20Ref.current, true);
      return;
    }
    current20Ref.current = rolls[0];
    sumRoll(rolls[0], true);
  };

  return (
    <div className="roll20">
      <button
        className={`normal ${rollWith === "normal" ? "highlight" : "plain"}`}
        onClick={() => {
          setRollWith("normal");
          advantageRef.current = "normal";
          sumRoll(current20Ref.current, false);
          selecting(twentiesRef.current, advantageRef.current);
        }}
      >
        Normal
      </button>
      <div className="mods">
        <button
          className={`${rollWith === "advantage" ? "highlight" : "plain"}`}
          onClick={() => {
            setRollWith("advantage");
            advantageRef.current = "advantage";
            sumRoll(current20Ref.current, false);
            selecting(twentiesRef.current, advantageRef.current);
          }}
        >
          Advantage
        </button>
        <button
          className={`${rollWith === "disadvantage" ? "highlight" : "plain"}`}
          onClick={() => {
            setRollWith("disadvantage");
            advantageRef.current = "disadvantage";
            sumRoll(current20Ref.current, false);
            selecting(twentiesRef.current, advantageRef.current);
          }}
        >
          Disadvantage
        </button>
      </div>
      <button
        onClick={() => {
          sumRoll(current20Ref.current, false);
          twoTwenties();
          selecting(twentiesRef.current, advantageRef.current);
        }}
        className="do-roll"
      >
        Roll 20 <i className="fas fa-dice-d20"></i>
      </button>
      <div className="twenties">
        <p>{twentiesRef.current[0]}</p>
        <p>{twentiesRef.current[1]}</p>
      </div>
    </div>
  );
};

export default Roll20;
