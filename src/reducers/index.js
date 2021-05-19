import athleticsModifier from "./athleticsModifier";
import strengthScore from "./strengthScore";
import strengthSavingModifier from "./strengthSavingModifier";
import game from "./game";
import myID from "./myID";
import myPos from "./myPos";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  athleticsModifier,
  strengthScore,
  strengthSavingModifier,
  game,
  myID,
  myPos,
});

export default allReducers;
