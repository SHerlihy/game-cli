const { v4: uuidv4 } = require("uuid");

const rolls = (state = {}, { type, rollClicked, select, value }) => {
  const thisRolls = { ...state };
  switch (type) {
    case "ADD_ROLL":
      if (!thisRolls[value]) {
        thisRolls[value] = {};
      }
      const roll = Math.ceil(Math.random() * value);
      thisRolls[value][uuidv4()] = { value: roll, selected: false };
      return thisRolls;
    case "TOGGLE_ROLL_SELECTED":
      thisRolls[value][rollClicked].selected = select;
      return thisRolls;
    case "RESET_ROLLS":
      return {};
    default:
      return state;
  }
};

export default rolls;
