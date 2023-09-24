import React, { useState } from "react";

// const Child = ({ getUIColour }) => {
//   const [activeColor, setActiveColor] = useState(null);

//   const handleChanged = (e) => {
//     const { value } = e.target;
//     setActiveColor(value);
//     getUIColour(value);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         id="input"
//         onChange={handleChanged}
//         value={activeColor}
//       ></input>
//     </>
//   );
// };
// export default Child

export default function Child(props) {
  debugger;
  console.log(props);
  const [activeColor, setActiveColor] = useState(null);
  const handleChanged = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    props.getUIColour(value);

    console.log(props);
  };
  return (
    <>
      <input
        type="text"
        id="input"
        onChange={handleChanged}
        value={activeColor}
      ></input>
    </>
  );
}
