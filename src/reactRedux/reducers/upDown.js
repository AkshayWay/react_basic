const changeTheNumber = (state = 10, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "inc5Number":
      return state + action.payload;
    default:
      return state;
  }
};

export default changeTheNumber;
