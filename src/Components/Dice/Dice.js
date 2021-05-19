import React from "react";
import Die from "../Die/Die";
import Roll20 from "../Roll20/Roll20";
import { v4 as uuidv4 } from "uuid";

const Dice = ({ setSum, current20Ref, resetRollsRef }) => {
  const sumRoll = (rolled, unselected) => {
    unselected
      ? setSum((prev) => {
          return Number(prev) + Number(rolled);
        })
      : setSum((prev) => {
          return Number(prev) - Number(rolled);
        });
  };

  const diceSet = (diceArr) => {
    return diceArr.map((e) => {
      return (
        <Die
          key={uuidv4()}
          value={e}
          sumRoll={sumRoll}
          resetRollsRef={resetRollsRef}
        />
      );
    });
  };

  return (
    <div className="dice">
      <Roll20 sumRoll={sumRoll} current20Ref={current20Ref} />
      {diceSet([4, 6])}
    </div>
  );
};

export default Dice;
