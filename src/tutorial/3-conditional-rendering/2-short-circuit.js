import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello";
  // const secondValue = text && "hello again";

  return (
    <>
      <h2>{text || "hello"}</h2>
      {/* {text && <h2>hello again</h2>} */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h2>error...</h2>}
      {isError ? <p>there is an error</p> : <p>there is no error</p>}
    </>
  );
};

export default ShortCircuit;
