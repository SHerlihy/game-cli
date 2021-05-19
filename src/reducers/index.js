import athleticsModifier from "./athleticsModifier";
import strengthScore from "./strengthScore";
import strengthSavingModifier from "./strengthSavingModifier";
import game from "./game";
import myID from "./myID";
import myPos from "./myPos";
import sum from "./sum";
import twenties from "./twenties";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  athleticsModifier,
  strengthScore,
  strengthSavingModifier,
  game,
  myID,
  myPos,
  sum,
  twenties,
});

export default allReducers;
