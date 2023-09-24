import React, { useState } from "react";

const ChildOne = ({ messages }) => {
  return (
    <>
      <h3>
        <label>{messages}</label>
      </h3>
    </>
  );
};

export default ChildOne;
