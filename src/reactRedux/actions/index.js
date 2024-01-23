export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const inc5Number = (num) => {
  return {
    type: "inc5Number",
    payload: num,
  };
};
