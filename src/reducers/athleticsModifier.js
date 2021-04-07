const athleticsModifier = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_ATHLETICS_MOD":
      return action.payload;
    default:
      return state;
  }
};

export default athleticsModifier;
