import React from "react";
import Die from "../Die/Die";
import Roll20 from "../Roll20/Roll20";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addRolled, subRolled } from "../../Actions";

const Dice = ({ current20Ref, resetRollsRef }) => {
  const dispatch = useDispatch();

  const sumRoll = (rolled, unselected) => {
    unselected ? dispatch(addRolled(rolled)) : dispatch(subRolled(rolled));
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
      <Roll20
        sumRoll={sumRoll}
        current20Ref={current20Ref}
        resetRollsRef={resetRollsRef}
      />
      {diceSet([4, 6])}
    </div>
  );
};

export default Dice;
