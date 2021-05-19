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

export const changeMyPos = (position, role) => {
  return {
    type: "CHANGE_MY_POS",
    position,
    role,
  };
};

export const changeSum = (number) => {
  return {
    type: "CHANGE_SUM",
    number,
  };
};

export const addRolled = (number) => {
  return {
    type: "ADD_ROLLED",
    number,
  };
};

export const subRolled = (number) => {
  return {
    type: "SUB_ROLLED",
    number,
  };
};
