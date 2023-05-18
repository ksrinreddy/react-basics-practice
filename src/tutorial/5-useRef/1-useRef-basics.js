import React, { useEffect, useRef } from "react";

// preserves the value
// DOES NOT trigger re-render
// targets DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  // console.log(refContainer);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(refContainer.current.value);
    // console.log(divContainer.current);
  };
  useEffect(() => {
    // console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
      <div ref={divContainer}>div container</div>
    </>
  );
};

export default UseRefBasics;
