const inputID = (state = "", action) => {
  switch (action.type) {
    case "SET_INPUT_ID":
      return action.payload;
    default:
      return state;
  }
};

export default inputID;
