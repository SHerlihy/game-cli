import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStrengthScore,
  changeAthleticsModifier,
  changeStrengthSavingModifier,
} from "../../Actions/index";
import "./stats.css";

const Stats = ({ setStats }) => {
  const strengthScore = useSelector((state) => state.strengthScore);
  const athleticsModifier = useSelector((state) => state.athleticsModifier);
  const strengthSavingModifier = useSelector(
    (state) => state.strengthSavingModifier
  );
  const dispatch = useDispatch();

  // onChange={() => dispatch(changeStrengthScore(number))}

  // const [score, setScore] = useState("10");
  // const [athletics, setAthletics] = useState("+0");
  // const [save, setSave] = useState("+0");
  const changeScore = (e) => {
    // setScore(e.target.value);
    dispatch(changeStrengthScore(e.target.value));
  };
  const changeAthletics = (e) => {
    // setAthletics(e.target.value);
    dispatch(changeAthleticsModifier(e.target.value));
  };
  const changeSave = (e) => {
    // setSave(e.target.value);
    dispatch(changeStrengthSavingModifier(e.target.value));
  };
  useEffect(() => {
    setStats({
      score: strengthScore,
      athletics: athleticsModifier,
      save: strengthSavingModifier,
    });
  }, [strengthScore, athleticsModifier, strengthSavingModifier]);
  return (
    <div className="stats">
      <div className="stat">
        <p>Strength Score</p>
        <input
          onChange={changeScore}
          value={strengthScore}
          placeholder="0-30"
        ></input>
      </div>
      <div className="stat">
        <p>Athletics Modifier</p>
        <input onChange={changeAthletics} value={athleticsModifier}></input>
      </div>
      <div className="stat">
        <p>
          Strength Saving <br />
          Modifier
        </p>
        <input onChange={changeSave} value={strengthSavingModifier}></input>
      </div>
    </div>
  );
};

export default Stats;
