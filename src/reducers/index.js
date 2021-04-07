import athleticsModifier from "./athleticsModifier";
import strengthScore from "./strengthScore";
import strengthSavingModifier from "./strengthSavingModifier";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  athleticsModifier: athleticsModifier,
  strengthScore: strengthScore,
  strengthSavingModifier: strengthSavingModifier,
});

export default allReducers;
