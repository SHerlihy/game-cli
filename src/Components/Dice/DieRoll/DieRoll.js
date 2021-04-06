import React, { useState } from "react";
import "./DieRoll.css";

const DieRoll = ({ sumRoll, rolled }) => {
  const [unselected, setUnselected] = useState(true);

  const selected = () => {
    setUnselected((prev) => !prev);
    sumRoll(rolled, unselected);
  };
  return (
    <div>
      <button
        className={`die-roll ${unselected ? "unselected" : "selected"}`}
        onClick={() => selected()}
      >
        {rolled}
      </button>
    </div>
  );
};

export default DieRoll;
