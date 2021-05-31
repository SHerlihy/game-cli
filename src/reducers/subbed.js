const subbed = (state = "0", action) => {
  switch (action.type) {
    case "SET_SUBBED":
      return action.payload;
    default:
      return state;
  }
};

export default subbed;
