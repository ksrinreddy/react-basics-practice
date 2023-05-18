import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <h3>regular counter</h3>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>
        decrease
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>

      <h3>complex counter</h3>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>
        increase later
      </button>
    </>
  );
};

export default UseStateCounter;
