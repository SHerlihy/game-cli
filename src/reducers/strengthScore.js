const strengthScore = (state = 10, action) => {
  switch (action.type) {
    case "CHANGE_STRENGTH_SCORE":
      return action.payload;
    default:
      return state;
  }
};

export default strengthScore;
