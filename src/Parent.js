import React, { useState } from "react";

import Child from "./Child";
import ChildOne from "./ChildOne";

export default function Parents() {
  const [UIColour, setUIColour] = useState(null);

  const [message, SetMessage] = useState("Hi dude!");

  const getUIColour = (color) => {
    setUIColour(color);
  };

  const changeMessage = (e) => {
    SetMessage(e.target.value);
  };
  return (
    <div style={{ backgroundColor: `${UIColour}` }}>
      <h1>Parent Component</h1>

      <h1>
        Type message here :
        <input type="text" id="msgLabel" onChange={changeMessage}></input>
      </h1>

      <Child getUIColour={getUIColour} />
      <ChildOne messages={message}></ChildOne>
    </div>
  );
}
