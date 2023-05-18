import React, { useState } from "react";

// useState - function
// use
// component name must start with uppercase
// cannot call conditionally
// must be inside the function/component body

const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(`value: ${value} handler: ${handler}`);
  const [text, setText] = useState("random title");
  // console.log(text);
  const handleClick = () => {
    if (text === "random title") {
      setText("hello");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
