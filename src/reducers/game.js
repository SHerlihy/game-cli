const game = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_GAME":
      return action.payload;
    default:
      return state;
  }
};

export default game;
