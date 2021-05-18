const myID = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_MY_ID":
      return action.payload;
    default:
      return state;
  }
};

export default myID;
