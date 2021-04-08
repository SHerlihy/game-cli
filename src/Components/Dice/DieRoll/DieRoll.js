import React, { useState, useEffect } from "react";
import "./DieRoll.css";

const DieRoll = ({
  preSelect,
  deselect,
  sumRoll,
  rolled,
  setTwenties,
  twenties,
}) => {
  const [unselected, setUnselected] = useState(true);

  const selected = () => {
    setUnselected((prev) => !prev);
    sumRoll(rolled, unselected);
  };

  useEffect(() => {
    if (preSelect) {
      selected();
    }
    return () => {
      if (twenties !== []) {
        setTwenties([]);
      }
    };
  }, [deselect]);

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
