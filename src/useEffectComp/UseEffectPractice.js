import React, { useState, useEffect } from "react";
import axios from "axios";
export default function UseEffectPractice() {
  let [isList, setIsList] = useState(true);
  let [listData, setList] = useState();

  useEffect((e) => {
    let result = axios
      .get("https://randomuser.me/api")
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <h1>Inside Use Effect</h1>
      <button>Click here</button>
      {isList === true ? <li>Akshay here</li> : ""}
    </>
  );
}
