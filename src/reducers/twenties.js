const twenties = (state = [0, 0], action) => {
  switch (action.type) {
    case "CHANGE_TWENTIES":
      return action.arr;
    default:
      return state;
  }
};

export default twenties;
