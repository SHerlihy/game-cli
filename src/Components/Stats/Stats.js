import React, { useEffect } from "react";
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

  const changeScore = (e) => {
    dispatch(changeStrengthScore(e.target.value));
  };
  const changeAthletics = (e) => {
    dispatch(changeAthleticsModifier(e.target.value));
  };
  const changeSave = (e) => {
    dispatch(changeStrengthSavingModifier(e.target.value));
  };

  // useEffect(() => {
  //   setStats({
  //     score: strengthScore,
  //     athletics: athleticsModifier,
  //     save: strengthSavingModifier,
  //   });
  // }, [strengthScore, athleticsModifier, strengthSavingModifier, setStats]);

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
