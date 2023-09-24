import React, { useState, useEffect } from "react";
import axios from "axios";
export default function UseEffectPractice() {
  let [isList, setIsList] = useState(false);
  let [listData, setList] = useState([]);

  let [doubleClick, setDoubleClick] = useState(2);

  let [resourceType, setResourceType] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setIsList(true);
        setList(json);
      });
  }, [resourceType]);

  const handleClick = () => {
    setDoubleClick((prev) => prev * 2);
  };
  useEffect(() => {
    window.addEventListener("dblclick", handleClick);
    console.log("inside use effect");
    return () => {
      console.log("cleen up use effect");
      window.removeEventListener("dblclick", handleClick);
    };
  }, []);

  return (
    <>
      <h1>Inside Use Effect</h1>
      <button>Click here</button>

      <label>Using tutorials</label>
      <div>
        <button onClick={() => setResourceType("posts")}>Post</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <span>{resourceType}</span>
        {isList === true
          ? listData.map((items) => {
              return <li key={Math.random()}>{JSON.stringify(items)}</li>;
            })
          : "No data found"}
      </div>
      <label>{doubleClick}</label>
    </>
  );
}
