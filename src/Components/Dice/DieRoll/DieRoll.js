import React, { useState, useEffect } from "react";
import "./DieRoll.css";

const DieRoll = ({ preSelect, sumRoll, rolled }) => {
  const [unselected, setUnselected] = useState(true);

  const selected = () => {
    setUnselected((prev) => !prev);
    sumRoll(rolled, unselected);
  };

  useEffect(() => {
    if (preSelect) {
      selected();
    }
  }, []);

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
