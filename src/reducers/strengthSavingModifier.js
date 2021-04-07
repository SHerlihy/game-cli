const strengthSavingModifier = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_STRENGTH_SAVING_MOD":
      return action.payload;
    default:
      return state;
  }
};

export default strengthSavingModifier;
