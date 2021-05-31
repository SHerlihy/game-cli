const { v4: uuidv4 } = require("uuid");

const rolls = (state = {}, { rollClicked, select }) => {
  switch (type) {
    case "ADD_ROLL":
      const roll = Math.ceil(Math.random() * value);
      const thisRolls = { ...state };
      thisRolls[uuidv4()] = { value: roll, selected: false };
      return thisRolls;
    case "TOGGLE_ROLL_SELECTED":
      const thisRolls = { ...prev };
      thisRolls[rollClicked].selected = select;
      return thisRolls;
    default:
      return state;
  }
};

export default rolls;
