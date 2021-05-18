import athleticsModifier from "./athleticsModifier";
import strengthScore from "./strengthScore";
import strengthSavingModifier from "./strengthSavingModifier";
import game from "./game";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  athleticsModifier,
  strengthScore,
  strengthSavingModifier,
  game,
});

export default allReducers;
