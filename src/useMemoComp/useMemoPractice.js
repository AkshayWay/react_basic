import React, { useState, useMemo } from "react";
import axios from "axios";

export default function useMemoPractice() {
  const [count, setCount] = useState(0);
  const [countTwo, setTwoCount] = useState(0);

  let incrementFun = () => {
    setCount(count + 1);
  };
  let incrementTwoFun = () => {
    setTwoCount(countTwo + 2);
  };

  //without useMemo this function will call every time
  // const isEven = () => {
  //   console.log("**************");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return count % 2 === 0;
  // };

  const isEven = useMemo(() => {
    console.log("**************");
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <>
      <h1>Inside Use Memo</h1>
      <div>
        <button onClick={incrementFun}>Increment</button>
        <label>{count}</label>
        <button onClick={incrementTwoFun}>Increment two</button>
        <label>{countTwo}</label>
        {/* <span>{isEven() === true ? "Even" : "Odd"}</span> */}
        <span>{isEven === true ? "Even" : "Odd"}</span>
      </div>
    </>
  );
}
