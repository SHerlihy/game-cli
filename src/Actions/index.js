export const changeStrengthScore = (number) => {
  return {
    type: "CHANGE_STRENGTH_SCORE",
    payload: number,
  };
};
export const changeStrengthSavingModifier = (number) => {
  return {
    type: "CHANGE_STRENGTH_SAVING_MOD",
    payload: number,
  };
};
export const changeAthleticsModifier = (number) => {
  return {
    type: "CHANGE_ATHLETICS_MOD",
    payload: number,
  };
};
export const changeGame = (gameObj) => {
  return {
    type: "CHANGE_GAME",
    payload: gameObj,
  };
};

export const changeMyID = (id) => {
  return {
    type: "CHANGE_MY_ID",
    payload: id,
  };
};
