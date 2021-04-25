import React, { useState, useEffect, useRef } from "react";
import "./DieRoll.css";

const DieRoll = ({
  preSelect,
  deselect,
  sumRoll,
  rolled,
  setTwenties,
  twenties,
  doubleRoll,
  setReroll,
}) => {
  const [unselected, setUnselected] = useState(true);

  const refUnselected = useRef(false);

  const selected = () => {
    setUnselected((prev) => !prev);
    sumRoll(rolled, unselected);
  };

  useEffect(() => {
    if (!preSelect) {
      refUnselected.current = true;
    }
    if (preSelect) {
      selected();
    }

    // the double roll happens and then this cleanup happens
    return () => {
      if (!refUnselected) {
        selected();
      }
      setReroll(true);
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
