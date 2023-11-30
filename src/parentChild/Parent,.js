import React from "react";
import Child from "./Child";
import { useState } from "react";

export default function Parent() {
  const [parentValue, setParentValue] = useState("");
  const changeParentValue = (e) => {
    setParentValue(e.target.value);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <input type="text" onChange={changeParentValue}></input>
      <Child parentValue={parentValue} />
    </div>
  );
}
