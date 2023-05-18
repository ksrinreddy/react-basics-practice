import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("call useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log(" call cleanup function");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render component");
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
