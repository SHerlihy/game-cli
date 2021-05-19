import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGame, changeSum, changeTwenties } from "../../Actions";
import "./roll20.css";

const Roll20 = ({ sumRoll, current20Ref, resetRollsRef }) => {
  const [rollWith, setRollWith] = useState("normal");

  const advantageRef = useRef("normal");

  const twenties = useSelector((state) => state.twenties);

  const dispatch = useDispatch();

  useEffect(() => {
    selecting(twenties, advantageRef.current);
  }, [twenties]);

  const twoTwenties = () => {
    const theRoll = [];
    const aTwenty = () => {
      return Math.ceil(Math.random() * 20);
    };
    theRoll.push(aTwenty());
    theRoll.push(aTwenty());

    dispatch(changeTwenties(theRoll));
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
          selecting(twenties, advantageRef.current);
        }}
        className="do-roll"
      >
        Roll 20 <i className="fas fa-dice-d20"></i>
      </button>
      <div className="twenties">
        <p>{twenties[0]}</p>
        <p>{twenties[1]}</p>
      </div>
    </div>
  );
};

export default Roll20;
