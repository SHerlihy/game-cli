import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeSum, changeTwenties } from "../../Actions";
import "./roll20.css";

const Roll20 = ({ sumRoll, current20Ref, resetRollsRef }) => {
  const [rollWith, setRollWith] = useState("normal");

  // const twentiesRef = useRef([0, 0]);
  const twenties = useSelector((state) => state.twenties);

  const dispatch = useDispatch();

  const advantageRef = useRef("normal");

  // useEffect(() => {
  //   if (resetRollsRef.current === true) {
  //     twentiesRef.current = [0, 0];
  //   }
  //   console.log(`reset20: `);
  // }, [resetRollsRef]);

  const twoTwenties = () => {
    const theRoll = [];
    const aTwenty = () => {
      return Math.ceil(Math.random() * 20);
    };
    theRoll.push(aTwenty());
    theRoll.push(aTwenty());

    dispatch(changeTwenties(theRoll));
    // twentiesRef.current = theRoll;
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
          selecting(twenties, advantageRef.current);
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
            selecting(twenties, advantageRef.current);
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
            selecting(twenties, advantageRef.current);
          }}
        >
          Disadvantage
        </button>
      </div>
      <button
        onClick={() => {
          twoTwenties();
          sumRoll(current20Ref.current, false);
          return setTimeout(() => {
            console.log(`from timeout:${twenties}`);
            selecting(twenties, advantageRef.current);
          }, 2000);
        }}
        className="do-roll"
      >
        Roll 20 <i className="fas fa-dice-d20"></i>
      </button>
      <div className="twenties">
        <p>{twenties[0]}</p>
        <p>{twenties[1]}</p>
      </div>
      <button>logit</button>
    </div>
  );
};

export default Roll20;
