import React, { useState, useEffect } from "react";
import "./stats.css";

const Stats = ({ setStats }) => {
  const [score, setScore] = useState("10");
  const [athletics, setAthletics] = useState("+0");
  const [save, setSave] = useState("+0");
  const changeScore = (e) => {
    setScore(e.target.value);
  };
  const changeAthletics = (e) => {
    setAthletics(e.target.value);
  };
  const changeSave = (e) => {
    setSave(e.target.value);
  };
  useEffect(() => {
    setStats({
      score: score,
      athletics: athletics,
      save: save,
    });
  }, [score, athletics, save]);
  return (
    <div className="stats">
      <div className="stat">
        <p>Strength Score</p>
        <input onChange={changeScore} value={score} placeholder="0-30"></input>
      </div>
      <div className="stat">
        <p>Athletics Modifier</p>
        <input onChange={changeAthletics} value={athletics}></input>
      </div>
      <div className="stat">
        <p>
          Strength Saving <br />
          Modifier
        </p>
        <input onChange={changeSave} value={save}></input>
      </div>
    </div>
  );
};

export default Stats;
