const sum = (state = false, { type, number }) => {
  switch (type) {
    case "CHANGE_SUM":
      return number;
    case "ADD_ROLLED":
      return Number(state) + Number(number);
    case "SUB_ROLLED":
      return Number(state) - Number(number);
    default:
      return state;
  }
};

export default sum;
