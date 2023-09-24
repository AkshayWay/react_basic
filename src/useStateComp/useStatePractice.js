import { React, useState } from "react";

export default function useStatePractice() {
  const [count, setCount] = useState(0);

  const [state, setState] = useState({ countTwo: 4, theme: "blue" });
  const counTwo = state.countTwo;
  const theme = state.theme;

  let incrementFun = () => {
    setCount(count + 1);
  };
  let decrementFun = () => {
    if (count != 0) setCount((previousCount) => previousCount - 1);
    else alert("not allowed");
  };

  let incrementFunTwo = () => {
    setState((previousCount) => {
      return { ...previousCount, countTwo: previousCount.countTwo + 1 };
    });
  };
  let decrementFunTwo = () => {
    if (counTwo != 0)
      setState((previousCount) => {
        return { ...previousCount, countTwo: previousCount.countTwo - 1 };
      });
    else alert("not allowed");
  };
  return (
    <>
      <span>Use state hook</span>
      <button onClick={incrementFun}>Increment</button>
      <label>{count}</label>
      <button onClick={decrementFun}>Decrement</button>

      <br></br>
      <label>Object way</label>
      <button onClick={incrementFunTwo}>Increment</button>
      <label>{counTwo}</label>
      <label>{theme}</label>
      <button onClick={decrementFunTwo}>Decrement</button>
    </>
  );
}
