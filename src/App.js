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
// import UseEffectFetchData from "./tutorial/2-useEffect/3-useEffect-fetch-data";

// ********* conditional rendering basics **********

// import MultipleReturns from "./tutorial/3-conditional-rendering/1-multiple-returns";
// import ShortCircuit from "./tutorial/3-conditional-rendering/2-short-circuit";
// import ShowHide from "./tutorial/3-conditional-rendering/3-show-hide";

// ********* forms basics **********

// import ControlledInputs from "./tutorial/4-forms/1-controlled-inputs";
// import ControlledInputs from "./tutorial/4-forms/2-multiple-inputs";

// ********* useRef basics **********

// import UseRefBasics from "./tutorial/5-useRef/1-useRef-basics";

// ********* useRef basics **********
import UseReducerBasics from "./tutorial/6-useReducer";

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
      {/* <UseEffectFetchData /> */}

      {/* ********** conditional rendering basics ********* */}
      {/* <MultipleReturns /> */}
      {/* <ShortCircuit /> */}
      {/* <ShowHide /> */}

      {/* ********** forms basics ********* */}
      {/* <ControlledInputs /> */}
      {/* <ControlledInputs /> */}

      {/* ********** useRef basics ********* */}
      {/* <UseRefBasics /> */}

      {/* ********** useReducer basics ********* */}
      <UseReducerBasics />
    </div>
  );
}

export default App;
