// import React, { Component } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decNumber, incNumber, inc5Number } from "./actions/index";

// const index = () => {
const Index = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatchData = useDispatch();
  return (
    <>
      <h1>Inside Use redux</h1>
      <div>
        <button onClick={() => dispatchData(incNumber())}>Increment +</button>
        <label>{myState}</label>
        <button onClick={() => dispatchData(decNumber())}>Decrement -</button>
        <button onClick={() => dispatchData(inc5Number(5))}>Add by 5</button>
      </div>
    </>
  );
};
export default Index;
// export default index;
