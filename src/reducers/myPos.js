const myPos = (state = 3, { type, position, role }) => {
  switch (type) {
    case "CHANGE_MY_POS":
      if (role === "p1") {
        const posDiff = 3 - position;
        const newPos = 3 + posDiff;
        return newPos;
      } else {
        return position;
      }
    default:
      return state;
  }
};

export default myPos;
