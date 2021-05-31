const rollWith = (state = "normal", action) => {
  switch (action.type) {
    case "SET_ROLL_WITH":
      return action.payload;
    default:
      return state;
  }
};

export default rollWith;
