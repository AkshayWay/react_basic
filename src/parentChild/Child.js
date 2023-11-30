import React from "react";

export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h2>Child Component</h2>
      <span>This data in child {props.parentValue}</span>
    </div>
  );
}
