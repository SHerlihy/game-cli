import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./roll20.css";

const Roll20 = ({ sum, addTwenty, twenties, setTwenties, sumRoll }) => {
  const [rollWith, setRollWith] = useState({
    normal: true,
    advantage: false,
    disadvantage: false,
  });
  const [unselected, setUnselected] = useState([false, true]);

  const rolling = useRef(false);
  const rollType = useRef(false);

  const newTwenties = useRef(false);

  useEffect(() => {
    console.log("effect select");
    console.log(unselected[0] === true && unselected[1] === true);
    if (unselected[0] === true && unselected[1] === true && rolling.current) {
      doubleRoll();
    }
    if (unselected[0] === true && unselected[1] === true && rollType.current) {
      rollWithClick(rollType.current);
    }
  }, [unselected]);

  useEffect(() => {
    if (newTwenties.current) {
      selectNadd();
    }
  }, [twenties]);

  const rollWithClick = (rolling) => {
    rollType.current = false;
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

  const highlight = () => {
    if (rollWith.advantage === true) {
      return highest();
    }
    if (rollWith.disadvantage === true) {
      return lowest();
    }

    return setUnselected([false, true]);
  };

  const highest = () => {
    if (twenties[0] > twenties[1]) {
      setUnselected([false, true]);
    }
    if (twenties[1] > twenties[0]) {
      setUnselected([true, false]);
    } else {
      setUnselected([false, true]);
    }
  };

  const lowest = () => {
    if (twenties[0] < twenties[1]) {
      setUnselected([false, true]);
    }
    if (twenties[1] < twenties[0]) {
      setUnselected([true, false]);
    } else {
      setUnselected([false, true]);
    }
  };

  const doubleRoll = () => {
    rolling.current = false;
    setTwenties([]);
    addTwenty();
    addTwenty();
    newTwenties.current = true;
  };

  const addIn = () => {
    if (unselected[1] === false) {
      console.log("adding right");
      return sumRoll(twenties[1], true);
    }
    console.log("adding left");
    sumRoll(twenties[0], true);
  };

  const subOut = () => {
    if (unselected[1] === false) {
      console.log("subbing right");
      return sumRoll(twenties[1], false);
    }
    console.log("subbing left");
    sumRoll(twenties[0], false);
  };

  const subNunselect = (source, adv) => {
    subOut();
    setUnselected([true, true]);
  };

  const selectNadd = () => {
    newTwenties.current = false;
    highlight();
    addIn();
  };

  const clickAdvantage = (adv) => {
    rollType.current = adv;
    subNunselect();
    // rollWithClick(adv);
    // selectNadd();
  };

  const clickRoll = () => {
    rolling.current = true;
    subNunselect();
  };

  return (
    <div className="roll20">
      <button
        onClick={() => {
          clickAdvantage("normal");
        }}
        className={`normal ${rollWith.normal ? "highlight" : "plain"}`}
      >
        Normal
      </button>
      <div className="mods">
        <button
          onClick={() => {
            clickAdvantage("advantage");
          }}
          className={`advantage ${rollWith.advantage ? "highlight" : "plain"}`}
        >
          Advantage
        </button>
        <button
          onClick={() => {
            clickAdvantage("disadvantage");
          }}
          className={`disadvantage ${
            rollWith.disadvantage ? "highlight" : "plain"
          }`}
        >
          Disadvantage
        </button>
      </div>
      <button
        onClick={() => {
          clickRoll();
        }}
        className="do-roll"
      >
        Roll 20 <i className="fas fa-dice-d20"></i>
      </button>
      <div className="twenties">
        <div>
          <button className={` ${unselected[0] ? "unselected" : "selected"}`}>
            {twenties[0]}
          </button>
        </div>
        <div>
          <button className={` ${unselected[1] ? "unselected" : "selected"}`}>
            {twenties[1]}
          </button>
        </div>
      </div>
      <button onClick={selectNadd}>add</button>
      <button onClick={subNunselect}>sub</button>
      <button onClick={doubleRoll}>roll</button>
      <button
        onClick={() => {
          rollWithClick("advantage");
        }}
      >
        rollAdv
      </button>
      <button
        onClick={() => {
          console.log(sum);
        }}
      >
        What's sum?
      </button>
    </div>
  );
};

export default Roll20;
