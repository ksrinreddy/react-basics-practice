import React from "react";

// ********* useState basics **********

// import ErrorExample from "./tutorial/1-useState/1-error-example";
// import UseStateBasics from "./tutorial/1-useState/2-useState-basics";
// import UseStateArray from "./tutorial/1-useState/3-useState-array";
// import UseStateObject from "./tutorial/1-useState/4-useState-object";
// import UseStateCounter from "./tutorial/1-useState/5-useState-counter";

// ********* useEffect basics **********

// import UseEffectBasics from "./tutorial/2-useEffect/1-useEffect-basics";
// import UseEffectCleanup from "./tutorial/2-useEffect/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/3-useEffect-fetch-data";

function App() {
  return (
    <div className="container">
      {/* ********** useState basics ********* */}
      {/* <ErrorExample /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}

      {/* ********** useEffect basics ********* */}
      {/* <UseEffectBasics /> */}
      {/* <UseEffectCleanup /> */}
      <UseEffectFetchData />
    </div>
  );
}

export default App;
