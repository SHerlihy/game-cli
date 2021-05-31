const inputID = (state = "", { type, input }) => {
  switch (type) {
    case "SET_INPUT_ID":
      return input;
    default:
      return state;
  }
};

export default inputID;
